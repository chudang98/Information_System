const express = require('express');

const controller = require('../controllers/apiController');

const router = express.Router();

router.route('/checkExistAcount').post(controller.checkAccount);
router.route('/timMatHang/:tenMatHang').get(controller.timMatHang);

module.exports = router;
