const express = require('express');

const controller = require('../controllers/apiController');

const router = express.Router();

router.route('/checkExistAcount').post(controller.checkAccount);

// Tìm mặt hàng theo tên ( tên tìm kiếm không phân biệt viết hoa và không có dấu )
router.route('/mathang/ten/:tenMatHang').get(controller.timMatHangTheoTen);

// Tìm mặt hàng theo loại ( Mã loại xem chi tiết trên matHangService.js )
router.route('/mathang/loai/:maLoai').get(controller.timMatHangTheoLoai);

/*
	Đăng nhập , yêu cầu các input trong form :
    username
    password
 */
router.route('/login').post();


/*
	Người dùng đăng ký tài khoản cần các input trong form :
		Các trường thông tin đặt tên như file Nguoi.js trong thư mục model kèm theo
		userName : tối thiểu 10 và tối đa 20 ký tự
		password : tối thiểu 10 và tối đa 20 ký tự
	! Chú ý : tên các trường trong input đặt đúng theo quy tắt các trường thông tin trong file Nguoi.js
*/
router.route('/signup').post();
module.exports = router;
