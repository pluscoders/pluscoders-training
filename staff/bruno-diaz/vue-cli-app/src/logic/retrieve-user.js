export default function(token) {
  // TODO validate token (throw error if it doesn't validate)
  
  return fetch("https://b00tc4mp.herokuapp.com/api/v2/users/", {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Authorization: "Bearer " + token
    },
  })
    .then(response => {
      if (response.ok)
        return response.json()
          .then((response) => {
            const user = response

            user.email = user.username

            delete user.username

            return user
          });

      const { headers } = response

      if (headers.get('Content-Type').includes('application/json'))
        return response.json()
          .then(({ error }) => { throw new Error(error) })

      throw new Error('server error')
    });
}