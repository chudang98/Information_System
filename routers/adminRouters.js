const express = require('express');

const adminController = require('../controllers/adminController');

const router = express.Router();

router
    .route('/login')
    .get(adminController.getLogin)

router
    .route('/signup')
    .get(adminController.getSignup)

router.route('/thongtinnhanvien').get(adminController.thongtinNVView);
// router.route('/themkh').get(nvbhController.themKHview);
// router.route('/thongtinkh').get(nvbhController.thongtinKHview);
// router.route('/thongtinmh').get(nvbhController.thongtinMHview);
// router.route('/thongtincanhan').get(nvbhController.thongtinCNview);
// router.route('/xemchitiet').get(nvbhController.xemchitietview);
// router.route('/timkiemmh').get(nvbhController.timkiemMHview);
// router.route('/hoadon').get(nvbhController.hoaDonview);
module.exports = router;