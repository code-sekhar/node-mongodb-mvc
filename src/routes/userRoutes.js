const express = require('express');
const router = express.Router();
const userController = require('../controller/userController');

// Correct function name to 'createUser'
router.post('/create', userController.createUser);
router.get('/getAll', userController.getAllUsers);
router.delete('/delete/:id', userController.deleteUser);
router.put('/update/:id', userController.updateUser);

module.exports = router;