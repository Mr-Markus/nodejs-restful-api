const express = require("express");
const router = express.Router();

const UserControlller = require('../controllers/user');

router.post('/signup', UserControlller.user_signup);

router.post('/login', UserControlller.user_login);

router.delete('/:userId', UserControlller.user_delete_user)

module.exports = router;