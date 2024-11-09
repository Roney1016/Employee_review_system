const express = require('express');
const passport = require('passport')
const router = express.Router();
const userController = require('../controllers/users_controller');
const dashboardsController = require('../controllers/dashboard_controller');

router.get('/', userController.signIn);
router.get('/sign-up', userController.signUp);
router.get('/sign-out', userController.destroySession);
router.get('/admin-dashboard', dashboardsController.adminDashboard);
router.get('/employee-dashboard/:id', dashboardsController.employeeDashboard);
router.get('/add-employee', userController.addEmployee);

router.post('/create', userController.create);// for self registration
router.post('/create-employee', userController.createEmployee);
router.post(
    '/create-session',
    passport.authenticate('local', { failureRedirect: '/ma' }),
    userController.createSession
);
module.exports = router;