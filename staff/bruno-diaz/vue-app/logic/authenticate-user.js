function authenticateUser(email, password) {
  if (typeof email !== "string")
    throw new TypeError(email + " is not a string");
  if (typeof password !== "string")
    throw new TypeError(password + " is not a string");

  const regexEmail =
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  if (!regexEmail.test(email))
    throw new Error(email + " is not an e-mail");

  return fetch("https://b00tc4mp.herokuapp.com/api/v2/users/auth", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: '{ "username" : "' + email + '", "password": "' + password + '" }',
  })
    .then(response => {
      if (response.ok)
        return response.json()
          .then(({ token }) => token);

      const { headers } = response

      if (headers.get('Content-Type').includes('application/json'))
        return response.json()
          .then(({ error }) => { throw new Error(error) })

      throw new Error('server error')
    });
}
