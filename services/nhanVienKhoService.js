const NhanVien = require('../models/NhanVien');

module.exports = {
  addDemoNVK,
};

async function addDemoNVK() {
  try {
    var user = new NhanVien({
      ten: 'Dang',
      diaChi: 'HaNoi',
      ngaySinh: '10-03-1998',
      gioiTinh: 'Nam',
      email: 'chudang98@gmail.com',
      sdt: '0374537192',
      userName: 'nhanvienkho1',
      password: 'ABCabc123456',
      chucVu: 'NhanVienKho',
    });
    console.log(user);
    await user.save();
    console.log('Successs');
    return { status: 'succes' };
  } catch (err) {
    console.log('Error');
    return { status: 'fail' };
  }
}
