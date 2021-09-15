export default function(password) {
  if (typeof password !== "string")
    throw new TypeError(password + " is not a string");

  return fetch("https://b00tc4mp.herokuapp.com/api/v2/users", {
    method: "DELETE",
    headers: { "Content-Type": "application/json", Authorization: "Bearer " + sessionStorage.token },
    body: '{ "password": "' + password + '" }',
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