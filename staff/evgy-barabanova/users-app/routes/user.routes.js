const express = require('express');
const router = express.Router();
const { User } = require('../db/models');

router.get('/register', (req, res) => {
  res.render('user/register');
});

router.post('/register', async (req, res) => {
  const { user_name, age } = req.body;
  const user = await User.create({ name: user_name, age });
  res.redirect('/users');
});

router.get('/users', async (req, res) => {
  const users = await User.findAll();
  res.render('user/users', { users });
});

router.get('/users/:id', async (req, res) => {
  const { id } = req.params.id;
  const user = await User.findOne({ where: { id: Number(id) }, raw: true })
  //console.log(user);
  res.render('user/oneUser', {user});
  //res.send('hiii')
});

module.exports = router;
