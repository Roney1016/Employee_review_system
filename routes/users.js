const express = require('express');
const passport = require('passport')
const router = express.Router();
const userController = require('../controllers/users_controller')

router.get('/', userController.signIn);
router.get('/sign-up', userController.signUp);

router.post(
    '/create-session',
    passport.authenticate('local', { failureRedirect: '/' }),
    userController.createSession
);
module.exports = router;