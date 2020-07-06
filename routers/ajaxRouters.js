const express = require('express');

const ajaxController = require('../controllers/ajaxController');
const { model, models } = require('mongoose');

const router = express.Router();

router.route('/timmathang/:ten').get(ajaxController.timMatHangTheoTen);
router.route('/timkhachhang/:sdt').get(ajaxController.timKhachHangTheoSdt);
router.route('/danhsachmathang').post(ajaxController.timMatHangDanhSach);

module.exports = router;