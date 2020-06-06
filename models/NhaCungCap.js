const mongoose = require('mongoose');

const nhaCungCapSchema = new mongoose.Schema({
  ten: {
    type: String,
    required: true,
  },
  nguoi: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Nguoi',
  },
  moTa: {
    type: String,
  },
});

const NhaCungCap = mongoose.model('NhaCungCap', nhaCungCapSchema);
module.exports = NhaCungCap;
