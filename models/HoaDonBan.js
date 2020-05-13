const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const hoaDonBanSchema = new mongoose.Schema({
  thoiGian: Date,
  ghiChu: String,
  khachHang: {
    type: Schema.Types.ObjectId,
    ref: 'KhachHang',
    required: true,
  },
  nhanVienBan: {
    type: Schema.Types.ObjectId,
    ref: 'NhanVien',
    required: true,
  },
  matHang: [
    {
      soLuong: {
        type: Number,
        required: true,
        default: 1,
      },
      matHang: {
        type: Schema.Types.ObjectId,
        ref: 'MatHang',
        required: true,
      },
      danhGia: String,
      rating: {
        type: String,
        default: 3,
        min: 1,
        max: 5,
      },
    },
  ],
});

const HoaDonBan = mongoose.model('HoaDonBan', hoaDonBanSchema);

module.exports = HoaDonBan;
