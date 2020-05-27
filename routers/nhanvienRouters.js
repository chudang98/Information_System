const express = require('express');

const nvkController = require('../controllers/nhanvienkhoController');
const nvController = require('../controllers/nhanvienController');

const router = express.Router();

router.route('/login').get(nvController.getLogin).post(nvController.checkLogin);

router
  .route('/signup')
  .get(nvController.getSignup)
  .post(nvController.signupAcc);

router.get('/home', nvController.getHome);

module.exports = router;
