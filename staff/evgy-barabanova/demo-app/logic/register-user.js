const registerUser = (name, username, password) => {
  const user = new User(name, username, password)

  users.push(user)
}
