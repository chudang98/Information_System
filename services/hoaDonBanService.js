const db = require('../models');
const HDBan = db.HoaDonBan;
const HDChitiet = db.HoaDonBanChiTiet;
const moment = require('moment');
const _ = require('lodash');

module.exports = {
	layHoaDonBanTheoUser,
  updateStateToanHoaDon,
  themHoaDonBan,
  layHoaDonChiTiet,
};

async function layHoaDonChiTiet(idHoaDon) {
  var HD = await HDBan.findOne({
    where: {
      _id: idHoaDon,
    },
    include: [{all: true}],
    // include: ['khachhang', 'nhanvien', 'mathang', 'nguoi_khach_hang', 'nguoi_nhan_vien'],
    raw: true,
    nest: true,
  });
  // then(results => {
  //   _.forEach(results, hoaDon => {

  //   })
  // });
  return HD;
}

async function layHoaDonBanTheoUser(idUser) {
  var HDBans = await HDBan.findAll({
    where: {
      KhachHangid: idUser
    },
    include: 'mathang',
    raw: true,
    nest: true,
  });
  return HDBans;
}

async function themHoaDonBan(data, idUser) {
  try{
    const hoaDonBan = await HDBan.create({
      KhachHangid: idUser,
      thoiGian: moment(),
      trangThai: 'Chờ xử lý',
    });
    _.forEach(data.data, async product => {
      await HDChitiet.create({
        HDBanid: hoaDonBan._id,
        MatHangid : product._id,
        soLuong: product.soLuong
      });
    });
    return {
      status: 'success',
    }
  }catch(err){
    console.log(err);
    return {
      status: 'fail',
    }
  }   
}

async function updateStateToanHoaDon(idHoaDon, trangthai) {
  var hoadon = null;
  hoadon = await HDBan.update(
    {
      trangThai: trangthai,
    },
    {
      where: {
        _id: idHoaDon,
      },
      returning: true,
      plain: true,
    },
  );
  return hoadon;
}

async function thanhToanHoaDonTrucTiep(data){

}

async function thanhToanThanhCongHoaDon(idUser){

}

async function _xoaMatHangKhoiHoaDon(idMatHang, idHoaDon){

}
