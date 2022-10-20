function registerUser(name, email, password, callback) {
  if (typeof name !== "string") throw new TypeError("name is not a string");
  if (name.trim().length === 0) throw new Error("name is empty or blank");
  if (typeof email !== "string") throw new TypeError("email is not a string");
  if (email.trim().length === 0) throw new Error("email is empty or blank");
  if (typeof password !== "string")
    throw new TypeError("password is not a string");
  if (password.trim().length === 0)
    throw new Error("password is empty or blank");
  if (typeof callback !== "function")
    throw TypeError("callback is not a function");

  const xhr = new XMLHttpRequest();

  xhr.onload = () => {
    const status = xhr.status;

    if (status >= 500) {
      callback(new Error("server error"));
    } else if (status >= 400) {
      callback(new Error("client error"));
    } else if (status === 201) {
      callback(null);
    }
  };

  xhr.open("POST", "https://b00tc4mp.herokuapp.com/api/v2/users");
  xhr.setRequestHeader("Content-Type", "application/json");

  xhr.send(`{
    "name": "${name}",
    "username": "${email}",
    "password": "${password}"
   }`);
}
