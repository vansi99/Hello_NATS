const express = require('express');
const router = express.Router();
const users = require('../controller/users.controller');

router.post('/register', users.register);

module.exports = router