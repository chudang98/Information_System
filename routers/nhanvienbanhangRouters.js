const express = require('express');

const nvbhController = require('../controllers/nhanvienbanhangController');

const router = express.Router();

router.route('/banhang').get(nvbhController.banHangView);
router.route('/themkh')
  .get(nvbhController.themKHview)
  // .post(nvbhController.dangKyKhachHang);
router.route('/choxuly').get(nvbhController.choXulyview);
router.route('/xemhdOl').get(nvbhController.xemHDolview);
router.route('/thongtinkh').get(nvbhController.thongtinKHview);
router.route('/thongtinmh').get(nvbhController.thongtinMHview);
router.route('/thongtincanhan').get(nvbhController.thongtinCNview);
router.route('/xemchitiet/:id').get(nvbhController.xemchitietview);
router.route('/timkiemmh').get(nvbhController.timkiemMHview);
router.route('/hoadon').get(nvbhController.hoaDonview);
router.route('/danggiaohang').get(nvbhController.danggiaoHview);
router.route('/xemhddanggiao').get(nvbhController.xemHDdanggiaoview);
router.route('/thanhcong').get(nvbhController.thanhCongview);
router.route('/xemhdthanhcong').get(nvbhController.xemHDthanhcongview);
router.route('/huy').get(nvbhController.huyview);
router.route('/xemhdhuy').get(nvbhController.xemHDhuyview);

module.exports = router;