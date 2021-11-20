export default function (fullname, email, password) {
  if (typeof fullname !== "string")
    throw new TypeError(fullname + " is not a string");
  if (typeof email !== "string")
    throw new TypeError(email + " is not a string");
  if (typeof password !== "string")
    throw new TypeError(password + " is not a string");

  // eslint-disable-next-line
  const regexEmail = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  if (!regexEmail.test(String(email).toLowerCase())) throw new Error(email + " is not an e-mail");

  // eslint-disable-next-line
  const regexPassword = /^[a-zA-Z0-9]{5,}$/;

  if (!regexPassword.test(password))
    throw new Error(
      "The password must contain at least 5 alphanumeric characters and it must not have special characters"
  );

  return fetch("https://b00tc4mp.herokuapp.com/api/v2/users/", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: `{ "fullname": "${fullname}", "username": "${email}", "password": "${password}" }`,
  })
    .then(response => {
      if (response.ok) return

      const { headers } = response

      if (headers.get('Content-Type').includes('application/json'))
        return response.json()
          .then(({ error }) => { throw new Error(error) })

      throw new Error('server error')
    });
}