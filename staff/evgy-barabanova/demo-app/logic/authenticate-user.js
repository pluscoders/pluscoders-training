const authenticateUser = (username, password) => {
  // TODO check if there is any user in the database (users) that matches this credentials, if yes, then return true, else return false

  const user = users.find(el => el.username === username && el.password === password)

  if (user) return true
  
  return false
}
