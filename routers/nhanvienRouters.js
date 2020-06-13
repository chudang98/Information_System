const express = require('express');

const nvController = require('../controllers/nhanvienController');
const authController = require('../controllers/authController');

const router = express.Router();

router.route('/login')
  .get(nvController.getLogin)
  .post(authController.authAccNhanVien);

router
  .route('/signup')
  .get(nvController.getSignup)
  .post(nvController.signupAcc);

router.get('/home', nvController.getHome);

module.exports = router;
