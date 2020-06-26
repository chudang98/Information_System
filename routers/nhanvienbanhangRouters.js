const express = require('express');

const nvbhController = require('../controllers/nhanvienbanhangController');

const router = express.Router();

router.route('/banhang').get(nvbhController.banHangView);
router.route('/themkh').get(nvbhController.themKHview);
router.route('/thongtinkh').get(nvbhController.thongtinKHview);
router.route('/thongtinmh').get(nvbhController.thongtinMHview);
router.route('/thongtincanhan').get(nvbhController.thongtinCNview);
router.route('/xemchitiet/:idkh').get(nvbhController.xemchitietview);
router.route('/timkiemmh').get(nvbhController.timkiemMHview);
router.route('/hoadon').get(nvbhController.hoaDonview);
module.exports = router;