const MatHang = require('../models/MatHang');
const _ = require('lodash');

module.exports = {
  takeProduct,
};

async function takeProduct() {
  var matHang = await MatHang.find({});
  return matHang;
}
