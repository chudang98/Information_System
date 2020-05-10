const mongoose = require('mongoose');

const cuaHang = new mongoose.Schema({
  ten: {
    type: String,
    required: true,
    unique: true,
  },
  diaChi: {
    type: String,
    required: true,
  },
  moTa: {
    type: String,
    required: true,
  },
});

const CuaHang = mongoose.model('CuaHang', cuaHang);

module.exports = CuaHang;
