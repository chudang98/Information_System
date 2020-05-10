const express = require('express');

const controller = require('../controllers/userController');

const router = express.Router();

router.route('/').get(controller.getHomeView);

module.exports = router;
