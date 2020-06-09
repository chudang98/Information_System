const mongoose = require('mongoose');

const bcrypt = require('bcryptjs');

const khachHangSchema = new mongoose.Schema({
  nguoi: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Nguoi',
  },
  userName: {
    type: String,
    required: true,
    minlength: 10,
    maxlength: 20,
    unique: true,
  },
  password: {
    type: String,
    required: true,
    minlength: 10,
    maxlength: 20,
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

const NhanVien = mongoose.model('KhachHang', khachHangSchema);

module.exports = NhanVien;
