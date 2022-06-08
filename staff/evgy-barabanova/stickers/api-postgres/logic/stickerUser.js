const { Note, User } = require('../db/models');

function stickerUser(id, userId, noteId) {
  return (async () => {
    const user = await User.findOne({ where: { id: userId }, raw: true })();
    const note = await Note.findAll({ where: { id: noteId }, raw: true })();
  });
}

module.exports = stickerUser;
