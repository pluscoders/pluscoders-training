function updateUserPassword(
  token,
  oldPassword,
  newPassword,
  newPasswordRepeat,
  callback
) {
  if (typeof token !== "string") throw new TypeError("token is not a string");
  if (token.trim().length === 0) throw new Error("token is empty or blank");
  if (typeof oldPassword !== "string")
    throw new TypeError("oldPassword is not a string");
  if (oldPassword.trim().length === 0)
    throw new Error("oldPassword is empty or blank");
  if (typeof newPassword !== "string")
    throw new TypeError("newPassword is not a string");
  if (newPassword.trim().length === 0)
    throw new Error("newPassword is empty or blank");
  if (typeof newPasswordRepeat !== "string")
    throw new TypeError("newPasswordRepeat is not a string");
  if (newPasswordRepeat.trim().length === 0)
    throw new Error("newPasswordRepeat is empty or blank");
  if (newPassword !== newPasswordRepeat)
    throw new Error("newPassword and newPasswordRepeat do not match");
  if (typeof callback !== "function")
    throw TypeError("callback is not a function");

  const xhr = new XMLHttpRequest();

  xhr.onload = () => {
    const status = xhr.status;

    if (status >= 500) {
      callback(new Error("server error"));
    } else if (status >= 400) {
      callback(new Error("client error"));
    } else if (status === 204) {
      callback(null);
    }
  };

  xhr.open("PATCH", "https://b00tc4mp.herokuapp.com/api/v2/users");
  xhr.setRequestHeader("Authorization", `Bearer ${token}`);
  xhr.setRequestHeader("Content-Type", "application/json");

  const data = { oldPassword, password: newPassword };

  const json = JSON.stringify(data);

  xhr.send(json);
}
