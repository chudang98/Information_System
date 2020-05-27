const express = require('express');

const controller = require('../controllers/apiController');

const router = express.Router();

router.route('/checkExistAcount').post(controller.checkAccount);

module.exports = router;
