const bcrypt = require('bcrypt')
const { User } = require('../db/models')

function authenticateUser(email, password) {
  const EMAIL_REGEXP = /^(([^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/iu;

  if (typeof email !== 'string')
    throw new Error('email is not a string')

  else if (email.trim().length === 0)
    throw new Error('email is empty or blank')

  else if (!EMAIL_REGEXP.test(email))
    throw new Error('email is not a valid email')

  else if (typeof password !== 'string')
    throw new Error('password is not a string')

  else if (password.trim().length === 0)
    throw new Error('password is empty or blank')

  return (async () => {
    const user = await User.findOne({
      where: {
        email,
      },
    })

    const match = await bcrypt.compare(password, user.password)

    if (!match)
      throw new Error('wrong credentials')

    return user.id.toString()
  })()
}

module.exports = authenticateUser
