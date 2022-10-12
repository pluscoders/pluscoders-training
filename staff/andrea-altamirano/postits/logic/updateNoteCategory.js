function updateNoteCategory(token, noteId, category, callback) {
  if (typeof token !== "string") throw new TypeError("token is not a string");
  if (token.trim().length === 0) throw new Error("token is empty or blank");
  if (typeof noteId !== "string") throw new TypeError("noteId is not a string");
  if (noteId.trim().length === 0) throw new Error("noteId is empty or blank");
  if (typeof category !== "string") throw new TypeError("text is not a string");
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

      // TODO en esas notas buscar la nota que quiero modificar (por id nota)

      const note = notes.find(function (note) {
        return note.id === noteId;
      });

      if (!note) {
        callback(new Error(`note with id ${noteId} not found`));

        return;
      }

      note.category = category;

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
