const express = require('express');

const nvkController = require('../controllers/nhanvienkhoController');
const nvController = require('../controllers/nhanvienController');

const router = express.Router();

router
  .route('/login')
  .get(nvkController.getLogin)
  .post(nvkController.checkLogin);

router
  .route('/signup')
  .get(nvController.getSignup)
  .post(nvController.signupAcc);
module.exports = router;
