function retrieveUser(token) {
  // TODO validate token (throw error if it doesn't validate)
  
  return fetch("https://b00tc4mp.herokuapp.com/api/v2/users/", {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Authorization: "Bearer " + token
    },
  })
    .then(response => {
      // debugger
      return response.json().then(response => {
        if (response.error) throw new Error(response.error)
        const user = response

        user.email = user.username

        delete user.username

        return user
      });
    });
}