const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const crypto = require('crypto');

const nhanVienSchema = new mongoose.Schema({
  ten: {
    type: String,
    required: true,
    maxlength: 40,
  },
  diaChi: {
    type: String,
    required: true,
    maxlength: 100,
  },
  ngaySinh: {
    type: Date,
    required: true,
  },
  gioiTinh: {
    type: String,
    required: true,
    enum: {
      values: ['Nam', 'Nữ'],
    },
  },
  email: {
    type: String,
    required: true,
    maxlength: 100,
  },
  sdt: {
    type: String,
    required: true,
    maxlength: 12,
  },
  userName: {
    type: String,
    required: true,
    maxlength: 20,
    unique: true,
  },
  password: {
    type: String,
    required: true,
    select: false,
  },
  passwordChangeAt: Date,
  chucVu: {
    type: String,
    required: true,
    enum: {
      values: ['NhanVienKho', 'NhanVienQuanLy'],
    },
  },
});

nhanVienSchema.methods.isCorrectPassword = async (passNhap, passThat) => {
  return await bcrypt.compare(passNhap, passThat);
};
nhanVienSchema.pre('save', async function (next) {
  this.password = await bcrypt.hash(this.password, 12);
  next();
});
nhanVienSchema.methods.isChangedPasswordAfter = function (timestamp) {
  if (this.passwordChangedAt) {
    const changedTimestamp = parseInt(
      this.passwordChangedAt.getTime() / 1000,
      10
    );
    return timestamp < changedTimestamp;
  }
  // False means NOT changed
  return false;
};

const NhanVien = mongoose.model('NhanVien', nhanVienSchema);

module.exports = NhanVien;
