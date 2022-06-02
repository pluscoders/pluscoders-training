const { User } = require('../db/models');

function retrieveUser(id, userId) {
  // TODO find user by userId and return its data

  return (async () => {
    await User.findOne({ where: { id: userId }, raw: true })();
  });
}

module.exports = retrieveUser;
