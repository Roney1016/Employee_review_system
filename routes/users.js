const express = require('express');
const router = express.Router();
const userController = require('../controllers/users_controller')

router.get('/', userController.signIn);
router.get('/sign-up', userController.signUp);
module.exports = router;