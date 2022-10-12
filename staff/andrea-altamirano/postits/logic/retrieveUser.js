function retrieveUser(token, callback) {
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
    } else if (status >= 200) {
      const json = xhr.responseText;

      const response = JSON.parse(json);

      callback(null, response);
    }
  };

  xhr.open("GET", "https://b00tc4mp.herokuapp.com/api/v2/users");

  xhr.setRequestHeader("Content-Type", "application/json");
  xhr.setRequestHeader("Authorization", `Bearer ${token}`);

  xhr.send();
}
