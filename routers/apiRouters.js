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
    userName
    password
 */
router.route('/login').post(controller.dangNhap);
/*
	Người dùng đăng ký tài khoản cần các input trong form :
		Các trường thông tin đặt tên như file Nguoi.js trong thư mục model kèm theo
		userName : tối thiểu 10 và tối đa 20 ký tự
		password : tối thiểu 10 và tối đa 20 ký tự
	! Chú ý : tên các trường trong input đặt đúng theo quy tắt các trường thông tin trong file Nguoi.js
*/
router.route('/signup').post(controller.dangKy);
router.route('/thongtincanhan').post(controller.thongTinCaNhan)
router.route('/thanhtoan').post(controller.thanhToan);
router.route('/hoadon').post(controller.getHoaDon);
router.route('/updatethongtin').post(controller.updateThongTinKhachHang);
router.route('/timkiemmathang').post(controller.timKiemMatHangTheoTen);
router.route('/laynhanxet').post(controller.layNhanXetMatHang);

module.exports = router;
