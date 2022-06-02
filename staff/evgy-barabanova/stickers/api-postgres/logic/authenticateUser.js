const bcrypt = require('bcrypt');
const { User } = require('../db/models');

function authenticateUser(email, password) {
  // TODO validate arguments

  return (async () => {
    const user = await User.findOne({
      where: {
        email,
      },
    });

    if(!user)
      throw new Error(`user with email ${email} not found`)

    const match = await bcrypt.compare(password, user.password);

    if(!match)
      throw new Error('wrong credentials')

    return user.id;
  })();
}

module.exports = authenticateUser;
