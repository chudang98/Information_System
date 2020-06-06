const mongoose = require('mongoose');

const danhGiaSchema = new mongoose.Schema({
  matHang: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
  },
  hoaDonBan: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
  },
  danhGia: {
    type: Number,
    default: 5,
    required: true,
  },
  nhanXet: {
    type: String,
    required: true,
  },

});

const DanhGia = mongoose.model('DanhGia', danhGiaSchema);
module.exports = DanhGia;
