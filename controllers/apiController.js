const service = require('../services/authenticateService');
const matHangService = require('../services/matHangServices');
const hoaDonBanService = require('../services/hoaDonBanService');
const jwtUtil = require('../utils/cookieUtils');

module.exports = {
  checkAccount,
  timMatHangTheoTen,
  timMatHangTheoLoai,
  dangNhap,
  dangKy,
  thanhToan,
  getHoaDon,
};

async function checkAccount(req, res) {
  var { userName } = req.body;
  var check = await nhanVienService.isExistAccount(userName);
  console.log(userName, check);
  return res.status(200).json({
    status: 'success',
    exist: check,
  });
}

async function timMatHangTheoTen(req, res) {
  const ten = req.params.tenMatHang;
  const docs = await matHangService.timMatHangTheoTen(ten);
  return res.status(200).json({
    status: 'success',
    lenght: docs.length,
    result: docs,
  })
}

async function timMatHangTheoLoai(req, res) {
  var loai = req.params.maLoai;
  loai = loai*1;
  const docs = await matHangService.timMatHangTheoLoai(loai);
  return res.status(200).json({
    status: 'success',
    lenght: docs.length,
    result: docs,
  })
}

async function dangNhap(req, res) {
  var { userName, password } = req.body;
  var result = await service.checkUserLogin(userName, password);
  if(result.status == 'success') {
    var token = await jwtUtil._createToken(result.infor);
    return res.json({
      status: 'success',
      token,
    });
  }else{
    return res.json({
      status : 'fail',
    });
  }

}

async function dangKy(req, res) {
  var data = req.body;
  var result = await service.userSignup(data);
  if(result.status == 'success'){
    var token = await jwtUtil._createToken(result.infor);
    // res.cookie("item","7493")
    return res.json({
      status: 'success',
      token,
    })
  }else{
    return res.json({
      status: 'fail',
    })
  }
}

async function thanhToan(req, res){
  const gioHang = req.body;
  const cookie = req.cookies.jwt;
  var user = jwtUtil.getUserByCookie(cookie);
  console.log(user);
  return res.json({
    status: 'success',
  })
}

async function getHoaDon(req, res){ 
  var idHoaDon = req.body;
  var res = await hoaDonBanService.layHoaDonChiTiet(idHoaDon);
  return {
    status: 'success',
    data: res,
  }
}