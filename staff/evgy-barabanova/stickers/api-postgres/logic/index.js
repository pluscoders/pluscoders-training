const registerUser = require('./registerUser');
const authenticateUser = require('./authenticateUser');
const retrieveUser = require('./retrieveUser');
const createNote = require('./createNote');
const retrieveNotes = require('./retrieveNotes');
const updateNote = require('./updateNote');
const deleteNote = require('./deleteNote');
const updateUserPassword = require('./updateUserPassword');
const updateUserName = require('./updateUserName');
const updateUserEmail = require('./updateUserEmail');
const searchNotes = require('./searchNotes')

module.exports = {
  registerUser,
  authenticateUser,
  retrieveUser,
  createNote,
  retrieveNotes,
  updateNote,
  deleteNote,
  updateUserPassword,
  updateUserName,
  updateUserEmail,
  searchNotes,
};
