const router = require('express').Router();
const { registerUser, authenticateUser, retrieveUser } = require('../logic');


router.post('/', async (req, res) => {
  try {
    const {
      name,
      email,
      password,
    } = req.body;

    await registerUser(name, email, password);

    res.status(201).send();
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

router.post('/auth', async (req, res) => {
  try {
    const {
      email,
      password,
    } = req.body;

    const userId = await authenticateUser(email, password);

    res.status(200).json({ userId });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

router.get('/:userId', async (req, res) => {
  const userId = req.headers.authorization;
  try {
    const user = await retrieveUser(userId);

    res.status(200).json({ user });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;
