const db = require('../models');
const HDBan = db.HoaDonBan;
const HDChitiet = db.HoaDonBanChiTiet;
const moment = require('moment');
const _ = require('lodash');
const { result } = require('lodash');
const MatHang = db.MatHang;

module.exports = {
	layHoaDonBanTheoUser,
  updateStateHoaDon,
  themHoaDonBan,
  layHoaDonChiTiet,
  thanhToanHoaDonTrucTiep,
  thanhToanThanhCongHoaDon,
  updateNhanVienChoHoaDon,
  layTongTienMatHang,
  layHoaDonTheoTrangThai
};

async function layHoaDonTheoTrangThai(trangThai){
  var HD = await HDBan.findOne({
    where: {
      trangThai: trangThai,
    },
    raw: true,
    nest: true,
  });
  result = await _matHangListHoaDon(HD);
  return result;
}

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

/* Chỉ sử dụng khi update lên tất cả trạng thái trừ Đã hoàn thành */
async function updateStateHoaDon(idHoaDon, trangthai, idClient) {
  await HDBan.update(
    {
      trangThai: trangthai,
      nhanVienid: idClient,
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

/*
  Nhân viên bán hàng thanh toán trực tiếp cho người trực tiếp đến mua hàng
  @params: listMatHang : [ 
    {_id: 1, soLuong: 2, giaBan: 10000 }, 
    {_id: 2, soLuong: 2, giaBan: 20000} 
  ]
*/
async function thanhToanHoaDonTrucTiep(listMatHang, idCustomer, idNhanVien){
  var HDB = await HDBan.create({
    NhanVienid: idNhanVien,
    KhachHangid: idCustomer,
    trangThai: 'Đã hoàn thành',
  });

  for(mathang of listMatHang){
    await HDChitiet.create({
      soLuong: mathang.soLuong,
      donGia: mathang.giaBan,
      HDBanid: HDB._id,
      MatHangid: mathang._id,
    });
    var hang = await MatHang.findOne(
      {
        where: {
          _id: mathang._id,
        },
        raw: true,
        nest: true,
      },
    );
    await MatHang.update(
      {
        soLuong: hang.soLuong - mahang.soLuong,
      }, 
      {
        where: {
          _id: mathang._id,
        }
      }
    );
  }

  return true;
}

async function layTongTienMatHang(idMatHang){
  var data = await HDChitiet.findAll({
    where: {
      MatHangid: idMatHang,
    },
    raw: true,
    nest: true,
  });
  var doanhSo = 0;
  for(hoadon of data){
    doanhSo += (data.soLuong * data.donGia);
  }
  return doanhSo;
}

// TODO : Trừ số lượng trực tiếp vào hóa đơn.
/*
  Sử dụng để thanh toán cho hóa đơn online
*/
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
      NhanVienid: idClient,
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
      _id: idHoaDon,
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
        soLuong: mathang.soLuong - mahang.soLuong,
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
    include: 'MatHang',
    raw: true,
    nest: true,
  });
  return hoaDonChiTiet;
}