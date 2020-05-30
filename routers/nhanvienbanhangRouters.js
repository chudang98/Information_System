const express = require('express');

const nvbhController = require('../controllers/nhanvienbanhangController');

const router = express.Router();

router.route('/home').get(nvbhController.homeView);

router.route('/signup').get(nvbhController.getSignup);

router.route('/themkh').get(nvbhController.themKhachHang);

module.exports = router;
