const db = require('../models');
const NhanVien = db.NhanVien;
const Nguoi = db.Nguoi;

const _ = require('lodash');
module.exports = {
  loginAccount,
  saveAccount,
  isExistAccount,
  layThongTinNhanVien,
  layTatCaNhanVien,
};
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
    var infor_nguoi = await Nguoi.create({
      ten,
      diaChi,
      ngaySinh,
      gioiTinh,
      email,
      sdt,
    });
    var nhanVien = await NhanVien.create({
      userName,
      password,
      chucVu,
      Nguoiid: infor_nguoi._id,
    });
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
  const user = await NhanVien.findOne({ userName: username });
  if (!user || !(await user.isCorrectPassword(password, user.password))) {
    return { status: 'fail' };
  }
  return {
    status: 'success',
    infor: user,
  };
}

async function isExistAccount(username) {
  if (!username) return false;
  var user = await NhanVien.findOne({ userName: username });
  if (!user) return false;
  return true;
}

async function layThongTinNhanVien(idNhanVien){
  var nhanvien = await NhanVien.findOne({
    where: {
      _id: idNhanVien,
    },
    include: 'nguoi',
    raw: true,
    nest: true,
  });

  return nhanvien;
}

async function layTatCaNhanVien(){
  var data = await NhanVien.findAll({
    include: 'nguoi',
    raw: true,
    nest: true,
  });
  return data
}