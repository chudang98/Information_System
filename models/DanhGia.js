const mongoose = require('mongoose');

const danhGiaSchema = new mongoose.Schema({
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
    type: Number,
    required: true,
    default: 0,
  },
  giaBan: {
    type: Number,
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
  anh: [
    {
      type: String,
    },
  ],
});

const DanhGia = mongoose.model('DanhGia', danhGiaSchema);
module.exports = DanhGia;
