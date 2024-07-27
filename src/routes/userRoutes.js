const express = require('express');
const router = express.Router();
const userController = require('../controller/userController');

// Correct function name to 'createUser'
router.post('/create', userController.createUser);

module.exports = router;