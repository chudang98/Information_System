const mongoose = require('mongoose');

const nguoiSchema = new mongoose.Schema({
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
});

const Nguoi = mongoose.model('Nguoi', nguoiSchema);

module.exports = Nguoi;
