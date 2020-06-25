const express = require('express');

const controller = require('../controllers/testController');

const router = express.Router();

// router.route('/layMatHang').get(controller.layMatHang);
router.route('/taoNguoi').get(controller.taoNguoi);

module.exports = router;
