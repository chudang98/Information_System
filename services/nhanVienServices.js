const NhanVien = require('../models/NhanVien');
const Nguoi = require('../models/Nguoi');

const _ = require('lodash');
module.exports = {
  checkLogin,
  loginAccount,
  saveAccount,
  isExistAccount,
};

async function checkLogin(username, password) {}

async function saveAccount(data) {
  try {
    var {
      ten,
      sdt,
      email,
      ngaySinh,
      gioiTinh,
      chucVu,
      userName,
      password,
      diaChi,
    } = data;
    console.log(data);
    var infor_nguoi = new Nguoi({
      ten,
      diaChi,
      ngaySinh,
      gioiTinh,
      email,
      sdt,
    });
    await infor_nguoi.save();
    var nhanVien = new NhanVien({
      userName,
      password,
      chucVu,
      nguoi: infor_nguoi._id,
    });
    await nhanVien.save();
    return {
      status: 'success',
      nhanvien: nhanVien,
    };
  } catch (err) {
    console.log(err);
    return { status: 'fail' };
  }
}

async function loginAccount(username, password) {
  if (_.isEmpty(username) || _.isEmpty(password)) return { status: 'wrong' };
  const user = await NhanVien.findOne({ userName: username }).select(
    '+password'
  );
  if (!user || !(await user.isCorrectPassword(password, user.password))) {
    return { status: 'wrong' };
  }
  return {
    status: 'true',
    type: user.chucVu,
  };
}

async function isExistAccount(username) {
  if (!username) return false;
  var user = await NhanVien.findOne({ userName: username });
  console.log(user);
  if (!user) return false;
  return true;
}
