const bcrypt = require('bcrypt')
const { User } = require('../db/models')

function registerUser(name, email, password) {
  // TODO validate arguments

  return (async () => {
    const passwordHash = await bcrypt.hash(password, 10)

    await User.create({
      name,
      email,
      password: passwordHash,
    })
  })()
}

module.exports = registerUser
