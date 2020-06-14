const mongoose = require('mongoose');

const matHangSchema = new mongoose.Schema({
  ten: {
    type: String,
    required: true,
  },
  soLuong: {
    type: Number,
    required: true,
    default: 0,
  },
  giaNhap: {
    type: String,
    required: true,
    default: 0,
  },
  giaBan: {
    type: String,
    required: true,
    default: 0,
  },
  mauSac: {
    type: String,
  },
  kichCo: {
    type: String,
  },
  loai: {
    type: String,
  },
  cuaHang: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
  },
  danhGia: {
    type: Number,
    default: 5,
    required: true,
  },
  Anh: {
    type: String,
  },
});

const MatHang = mongoose.model('MatHang', matHangSchema);
module.exports = MatHang;
