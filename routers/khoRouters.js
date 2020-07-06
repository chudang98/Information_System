const express = require('express');

const khoController = require('../controllers/khoController');

const router = express.Router();

router
    .route('/login')
    .get(khoController.getLogin);
router.route('/themncc')
    .get(khoController.themNCCView)
    .post(khoController.dangKyNCC);
router.route('/xemncctheosdt').post(khoController.xemNCCBandSdt);
router.route('/xemmhtheoten').post(khoController.XemMathangBandTen);
router.route('/nhapkho').get(khoController.nhapkhoView);
router.route('/timkiemmh').get(khoController.timkiemMHView);
router.route('/hoadon').get(khoController.hoadonView);
router.route('/thongtinncc').get(khoController.thongtinNCCView);
router.route('/xemchitiet/:id').get(khoController.xemchitietNCCView);
router.route('/thongtincanhan').get(khoController.thongtinCNView);
router.route('/thongtinmh').get(khoController.thongtinMHView);
router.route('/xemchitietmh/:id').get(khoController.xemchitietMHView);
router.route('/themmh')
    .get(khoController.themMHView)
    .post(khoController.dangkyMHview);
module.exports = router;