function createNote(token, callback) {
  if (typeof token !== "string") throw new TypeError("token is not a string");
  if (token.trim().length === 0) throw new Error("token is empty or blank");
  if (typeof callback !== "function")
    throw TypeError("callback is not a function");

  const xhr = new XMLHttpRequest();

  xhr.onload = () => {
    const status = xhr.status;

    if (status >= 500) {
      callback(new Error("server error"));
    } else if (status >= 400) {
      callback(new Error("client error"));
    } else if (status === 200) {
      const json = xhr.responseText;

      const response = JSON.parse(json);

      const notes = response.notes || [];

      const note = {
        id: "note-" + Date.now(),
        text: "",
        category: "",
      };

      notes.push(note);

      const xhr2 = new XMLHttpRequest();

      xhr2.onload = () => {
        const status = xhr2.status;

        if (status >= 500) {
          callback(new Error("server error"));
        } else if (status >= 400) {
          callback(new Error("client error"));
        } else if (status === 204) {
          callback(null);
        }
      };

      xhr2.open("PATCH", "https://b00tc4mp.herokuapp.com/api/v2/users");
      xhr2.setRequestHeader("Content-Type", "application/json");
      xhr2.setRequestHeader("Authorization", `Bearer ${token}`);

      const payload = { notes };

      const json2 = JSON.stringify(payload);

      xhr2.send(json2);
    }
  };

  xhr.open("GET", "https://b00tc4mp.herokuapp.com/api/v2/users");
  xhr.setRequestHeader("Authorization", `Bearer ${token}`);

  xhr.send();
}
