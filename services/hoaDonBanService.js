const db = require('../models');
const HDBan = db.HoaDonBan;
const HDChitiet = db.HoaDonBanChiTiet;
const moment = require('moment');
const _ = require('lodash');
const MatHang = db.MatHang;

module.exports = {
	layHoaDonBanTheoUser,
  updateStateHoaDon,
  themHoaDonBan,
  layHoaDonChiTiet,
  thanhToanHoaDonTrucTiep,
  thanhToanThanhCongHoaDon,
  updateNhanVienChoHoaDon,
  layHoaDonTheoMatHang,
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

async function updateStateHoaDon(idHoaDon, trangthai) {
  await HDBan.update(
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
  return {
    status: 'success',
  };
}

async function thanhToanHoaDonTrucTiep(listMatHang, idCustomer, idNhanVien){

}

async function layHoaDonTheoMatHang(idMatHang){
  var HDCT = await HDChitiet.findAll({
    where: {
      MatHangid: idMatHang,
    },
    raw: true,
    nest: true,
  });
  // for(hoadon of HDCT){
    
  // }

}

// TODO : Trừ số lượng trực tiếp vào hóa đơn.
async function thanhToanThanhCongHoaDon(idClient, idHoaDon){
  var hoaDon = await HDBan.findOne({
    where: {
      _id: idHoaDon,
    },
    raw: true,
    nest: true,
  });

  if(hoaDon.trangThai == 'Đã hoàn thành' || hoaDon.trangThai == 'Đã hủy'){
    return {
      status: 'fail',
    }
  }

  await HDBan.update(
    {
      trangThai: 'Đã hoàn thành',
    },
    {
      where: {
        _id: idHoaDon,
      }
    }
  );

  var hdct = await HDChitiet.findAll({
    where: {
      HDBanid: HDBan._id,
    },
    raw: true,
    nest: true,
  });

  await _updateSoLuongMatHang(hdct);

  return true;
}

async function updateNhanVienChoHoaDon(idNhanVien, idHoaDon){
  await HDBan.update(
    {
      NhanVienid: idNhanVien,
    },
    {
    where: {
      _id: idNhanVien,
    }
  });
  return true;
}

async function _updateSoLuongMatHang(hdct) {
  for(mahang of hdct){
    var mathang = await MatHang.findOne(
      {
        where: {
          _id: mahang.MatHangid,
        },
        raw: true,
        nest: true,
      },
    );
    await MatHang.update(
      {
        soLuong: mathang.soLuong - data.soLuong,
      }, 
      {
        where: {
          _id: mathang._id,
        }
      }
    );
  }
}

async function _xoaMatHangKhoiHoaDon(idMatHang, idHoaDon){
  var result = await HDChitiet.destroy({
    where: {
      HDBanid: idHoaDon,
      MatHangid: idMatHang,
    },
  });
  // console.log(result);
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