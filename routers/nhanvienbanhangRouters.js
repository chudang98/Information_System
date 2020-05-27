const express = require('express');

const nvbhController = require('../controllers/nhanvienbanhangController');

const router = express.Router();

router
    .route('/login')
    .get(nvbhController.getLogin)


router
    .route('/signup')
    .get(nvbhController.getSignup)


module.exports = router;