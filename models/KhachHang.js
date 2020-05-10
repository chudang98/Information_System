const mongoose = require('mongoose');

const bcrypt = require('bcryptjs');

const khachHangSchema = new mongoose.Schema({
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
      value: ['Nam', 'Nữ'],
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
  },
  passwordChangeAt: Date,
  moTa: {
    type: String,
    maxlength: 100,
  },
});

khachHangSchema.methods.isCorrectPassword = async (passNhap, passThat) => {
  return await bcrypt.compare(passNhap, passThat);
};
khachHangSchema.pre('save', async function (next) {
  this.password = await bcrypt.hash(this.password, 12);
  next();
});
khachHangSchema.methods.isChangedPasswordAfter = function (timestamp) {
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

const NhanVien = mongoose.model('NhanVien', khachHangSchema);

module.exports = NhanVien;
