function authenticateUser(email, password, callback) {
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
    } else if (status === 200) {
      const json = xhr.responseText;

      const response = JSON.parse(json);

      const token = response.token;

      callback(null, token);
    }
  };

  xhr.open("POST", "https://b00tc4mp.herokuapp.com/api/v2/users/auth");
  xhr.setRequestHeader("Content-Type", "application/json");

  xhr.send(`{
        "username": "${email}",
        "password": "${password}"
    }`);
}
