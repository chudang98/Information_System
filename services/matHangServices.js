const MatHang = require('../models/MatHang');
const imageService = require('./anhSanPhamService');
const _ = require('lodash');

module.exports = {
  takeProduct,
};

async function takeProduct() {
  var matHang = await MatHang.find({});
  console.log(matHang);
  return matHang;
}

async function themMatHangTuJSON(data) {}
