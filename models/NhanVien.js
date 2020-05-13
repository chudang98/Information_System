const mongoose = require('mongoose');

const nhanVienSchema = new mongoose.Schema({
  nguoi: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Nguoi',
  },
  cuaHang: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'CuaHang',
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
