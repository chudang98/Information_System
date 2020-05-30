const express = require('express');

const nvbhController = require('../controllers/nhanvienbanhangController');

const router = express.Router();

router.route('/home').get(nvbhController.homeView);

router.route('/signup').get(nvbhController.getSignup);

router.route('/banhang').get(nvbhController.banHangView);
router.route('/themkh').get(nvbhController.themKHview);

module.exports = router;
