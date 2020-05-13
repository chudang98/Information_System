const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const hoaDonNhapSchema = new mongoose.Schema({
  thoiGian: {
    type: date,
    required: true,
  },
  nhanVienKho: {
    type: Schema.Types.ObjectId,
    ref: 'NhanVien',
    required: true,
  },
  nhaCungCap: {
    type: Schema.Types.ObjectId,
    ref: 'NhaCungCap',
    required: true,
  },
  matHang: [
    {
      matHang: {
        type: Schema.Types.ObjectId,
        ref: 'MatHang',
        required: true,
      },
      soLuong: {
        type: Number,
        required: true,
        default: 1,
      },
    },
  ],
});

const HoaDonNhap = mongoose.model('HoaDonNhap', hoaDonNhapSchema);

module.exports = HoaDonNhap;
