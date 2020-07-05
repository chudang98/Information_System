const express = require('express');

const ajaxController = require('../controllers/ajaxController');

const router = express.Router();

router.route('/timmathang/:ten').get(ajaxController.timMatHangTheoTen);
router.route('/timkhachhang/:sdt').get(ajaxController.timKhachHangTheoSdt);
