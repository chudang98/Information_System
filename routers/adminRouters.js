const express = require('express');

const adminController = require('../controllers/adminController');

const router = express.Router();

router
    .route('/login')
    .get(adminController.getLogin)

router.route('/thongtinnhanvien').get(adminController.thongtinNVView);
router.route('/xemchitietnv').get(adminController.xemchitietNVView);
router.route('/thongtinkhachhang').get(adminController.thongtinKHView);
router.route('/xemchitietkh/:id').get(adminController.xemchitietKHView);
router.route('/thongtinncc').get(adminController.thongtinNCCView);
router.route('/xemchitietncc').get(adminController.xemchitietNCCView);
router.route('/themnhanvien').get(adminController.themNVView);
router.route('/tkmh').get(adminController.thongkeMHView);
router.route('/danhsachhoadon').get(adminController.danhsachHDView);
//thongke theo thoi gian 
router.route('/tktg').get(adminController.thongkeTGView);
router.route('/ththang').get(adminController.thongketheoThangView);
router.route('/danhsachhoadonthang').get(adminController.danhsachHDThangView);
router.route('/danhsachhoadonngay').get(adminController.danhsachHDNgayView);
router.route('/danhsachhoadonngaychitiet').get(adminController.danhsachHDNgaychitietView);
//tk theo quy
router.route('/thquy').get(adminController.thongketheoQuyView);
router.route('/danhsachhoadonquy').get(adminController.danhsachHDQuyView);
//tk nam
router.route('/thnam').get(adminController.thongketheoNamView);
router.route('/danhsachhoadonnam').get(adminController.danhsachHDNamView);
//tkkh
router.route('/tkkh').get(adminController.thongketheoKHView);
router.route('/danhsachhoadonkh').get(adminController.danhsachHDKHView);
router.route('/hoadonkhchitiet').get(adminController.hoadonKHchitietView);
//tkncc
router.route('/tkncc').get(adminController.thongketheoNCCView);
router.route('/danhsachhoadonncc').get(adminController.danhsachHDNCCView);
router.route('/hoadonnccchitiet').get(adminController.hoadonNCCchitietView);
router.route('/thongtincanhan').get(adminController.thongtinCNView);
module.exports = router;