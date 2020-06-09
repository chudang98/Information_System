const MatHang = require('../models/MatHang');
const DanhGia = require('../models/DanhGia');
const Nguoi = require('../models/Nguoi');
const KhachHang = require('../models/KhachHang');

const _ = require('lodash');

module.exports = {
  takeProduct,
  themMatHang,
  timMatHangTheoTen,
  timMatHangTheoLoai,
  layNhanXet,
  themNhanXet,
  dangNhap,
  dangKy,
};

async function takeProduct() {
  var matHang = await MatHang.find({});
  return matHang;
}

async function themMatHang(matHangMoi) {
  const matHang = new MatHang({ 
    ...matHangMoi,
    anh: null
  });
  try{
    await matHang.save();
    return {
      status: 'success',
    };
  }catch(err) {
    return {
      status: 'fail',
    }
  }
}

async function timMatHangTheoTen(tenMatHang) {
  try{
    const docs = await MatHang.find({ ten :  { $regex: `.*${tenMatHang}.*` } });
    return docs;
  }catch(err){
    return []
  }
}

async function timMatHangTheoLoai(maLoaiMatHang) {
  try{
    switch(maLoaiMatHang){
      case 1: {
        const docs = await MatHang.find({ loai: 'Áo Sơ mi' });
        console.log(1);
        return docs;
      };
      case 2: {
        const docs = await MatHang.find({ loai: 'Áo khoác' });
        return docs;
      };
      case 3 : {
        const docs = await MatHang.find({ loai: 'Áo Vest' });
        return docs;
      };
      case 4 : {
        const docs = await MatHang.find({ loai: 'Áo phông' });
        return docs;
      };
      case 5 : {
        const docs = await MatHang.find({ loai: 'Quần vải' });
        return docs;
      };
      case 6 : {
        const docs = await MatHang.find({ loai: 'Quần Kaki' });
        return docs;
      };
      case 7 : {
        const docs = await MatHang.find({ loai: 'Quần jean ống rộng' });
        return docs;
      };
      case 8 : {
        const docs = await MatHang.find({ loai: 'Quần jean ống đứng' });
        return docs;
      };
      default : {
        const docs = await MatHang.find();
        return docs;
      }
    }
  }catch(err){
    return [];
  }
}

async function layNhanXet(idMatHang) {
  try{
    const danhGia = await DanhGia.find({ matHang: idMatHang });
    return danhGia;
  }catch(err){
    return [];
  }

}

async function themNhanXet(idHoaDon, idMatHang, nhanXet) {
  try{
    const nhanXet = new DanhGia({
      ...nhanXet,
      matHang : idMatHang,
      hoaDonBan : idHoaDon,
    });
    await nhanXet.save();
    return {
      status: 'success',
    }
  }catch(err){
    return {
      status: 'fail',
    }
  }
}

async function dangNhap() {

}

async function dangKy() {

}