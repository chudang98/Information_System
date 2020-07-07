const khachHangService = require('../services/khachHangService');
const nhanVienService = require('../services/nhanVienServices');
const matHangService = require('../services/matHangServices');
const hoaDonBanService = require('../services/hoaDonBanService');
const cookieUlti = require('../utils/cookieUtils');

module.exports = {
  timMatHangTheoTen,
  timKhachHangTheoSdt,
  timMatHangDanhSach,
  thanhToanHoaDon,
}
async function thanhToanHoaDon(req, res){
  var cookie = req.cookies.jwt;
  var user = await cookieUlti._decodeCookie(cookie);

  await hoaDonBanService.thanhToanHoaDonTrucTiep(req.body.listMatHang, req.body.idCustomer, user.id);
  return res.status(200).json({
    // data: result,
    status: 'success',
  })
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