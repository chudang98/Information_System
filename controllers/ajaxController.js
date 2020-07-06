const khachHangService = require('../services/khachHangService');
const nhanVienService = require('../services/nhanVienServices');
const matHangService = require('../services/matHangServices');
const hoaDonBanService = require('../services/hoaDonBanService');

module.exports = {
  timMatHangTheoTen,
  timKhachHangTheoSdt,
  timMatHangDanhSach,
}

async function timMatHangDanhSach(req, res){
  var data = req.body.data;
  console.log(data);
  var result = [];
  for(id of data){
    var sanpham = await matHangService.layMatHangBangId(id);
    result.push(sanpham);
  }
  return res.status(200).json({
    data: result,
  })
}

async function timMatHangTheoTen(req, res){
  var ten = req.params.ten;
  var data = await matHangService.timMatHangTheoTen(ten);
  return res.json({
    data,
  });
}

async function timKhachHangTheoSdt(req, res){
  var sdt = req.params.sdt;
  var data = await khachHangService.timKhachHangTheoSdt(sdt);
  return res.json({
    data
  });

}