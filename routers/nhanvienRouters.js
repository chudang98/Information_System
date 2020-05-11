const express = require('express');

const nvkController = require('../controllers/nhanvienkhoController');

const router = express.Router();

router
  .route('/login')
  .get(nvkController.getLogin)
  .post(nvkController.checkLogin);

router.route('/signup').get().post();
module.exports = router;
