const express = require('express');
const { signup, login,logout } = require('../controllers/userController');
const { isLogged } = require('../middleware/authMiddleware');
const router = express.Router();

router.post('/register', signup);
router.post('/login', login);
 router.post('/signout',isLogged, logout)

module.exports = router;