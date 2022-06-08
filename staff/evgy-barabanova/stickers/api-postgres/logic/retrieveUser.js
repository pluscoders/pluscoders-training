const { User } = require('../db/models');

function retrieveUser(userId) {
  // TODO find user by userId and return its data

  return User.findOne({ where: { id: userId }, raw: true })
}

module.exports = retrieveUser;
