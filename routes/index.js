const express = require('express');
const router = express.Router();
const homeController = require('../controllers/homeController');
const authController = require('../controllers/authController');
const dashboardController = require('../controllers/dashboardController');
const postController = require('../controllers/postController');
const authMiddleware = require('../utils/auth'); // Assuming you have an authMiddleware defined in your utils folder

router.get('/', homeController.getHomePage);
router.get('/login', authController.getLoginPage);
router.post('/login', authController.login);
router.get('/signup', authController.getSignupPage);
router.post('/signup', authController.signup);
router.get('/dashboard', authMiddleware, dashboardController.getDashboard);
router.post('/post', authMiddleware, postController.createPost);
router.get('/logout', authController.logout);

module.exports = router;