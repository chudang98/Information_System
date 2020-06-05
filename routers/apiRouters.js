const express = require('express');

const controller = require('../controllers/apiController');

const router = express.Router();

router.route('/checkExistAcount').post(controller.checkAccount);

// Tìm mặt hàng theo tên ( tên tìm kiếm không phân biệt viết hoa và không có dấu )
router.route('/mathang/ten/:tenMatHang').get(controller.timMatHangTheoTen);
// Tìm mặt hàng theo loại ( Mã loại xem chi tiết trên matHangService.js )
router.route('/mathang/loai/:maLoai').get(controller.timMatHangTheoLoai);

module.exports = router;
