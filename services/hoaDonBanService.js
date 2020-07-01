const db = require('../models');
const HDBan = db.HoaDonBan;
const HDChitiet = db.HoaDonBanChiTiet;
const moment = require('moment');
const _ = require('lodash');
const MatHang = db.MatHang;

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
    include: ['khachhang', 'nguoi_khach_hang'],
    raw: true,
    nest: true,
  });
  result = await _matHangTrongHoaDon(HD._id);
  return {
    ...HD,
    mathang: result
  };
}

async function layHoaDonBanTheoUser(idUser) {
  var result = [];
  var HDBans = await HDBan.findAll({
    where: {
      KhachHangid: idUser
    },
    raw: true,
    nest: true,
  });
  result = await _matHangListHoaDon(HDBans);
  return result;
}

async function themHoaDonBan(data, idUser) {
  try{
    const hoaDonBan = await HDBan.create({
      KhachHangid: idUser,
      thoiGian: moment(),
      trangThai: 'Chờ xử lý',
    });
    for(product of data){
      await HDChitiet.create({
        HDBanid: hoaDonBan._id,
        MatHangid : product._id,
        soLuong: product.soLuong
      });
    };
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
  var result = await HDChitiet.destroy({
    where: {
      HDBanid: idHoaDon,
      MatHangid: idMatHang,
    },
  });
  console.log(result);
  return {
    status: 'success',
  }
  
}

async function _matHangListHoaDon(listHD) {
  var result = [];
  for(hoadon of listHD){
    var matHang = await _matHangTrongHoaDon(hoadon._id);
    result.push({
      ...hoadon,
      mathang: matHang,
    });
  };
  return result;
}

async function _matHangTrongHoaDon(idHoaDon){
  var hoaDonChiTiet = await HDChitiet.findAll({
    where: {
      HDBanid: idHoaDon,
    },
    raw: true,
    nest: true,
  });

  var result = [];

  for(hoaDon of hoaDonChiTiet){
    var matHang = await MatHang.findOne({
      where: {
        _id: hoaDon.MatHangid,
      },
      raw: true,
      nest: true,
    });
    result.push({
      ...matHang,
      soLuong: hoaDon.soLuong,
    });
  };
  
  return result;
}