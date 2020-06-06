const nhanVienService = require('../services/nhanVienServices');
const matHangService = require('../services/matHangServices');

module.exports = {
  checkAccount,
  timMatHangTheoTen,
  timMatHangTheoLoai,
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
  console.log(typeof loai);
  const docs = await matHangService.timMatHangTheoLoai(loai);
  return res.status(200).json({
    status: 'success',
    lenght: docs.length,
    result: docs,
  })
}

async function dangNhap(req, res) {
  var { userName, password } = req.body;

}

async function dangKy(req, res) {

}