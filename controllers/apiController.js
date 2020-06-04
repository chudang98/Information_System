const nhanVienService = require('../services/nhanVienServices');
const matHangService = require('../services/matHangServices');

module.exports = {
  checkAccount,
  timMatHang,
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

async function timMatHang(req, res) {
  const ten = req.params.tenMatHang;
  const docs = await matHangService.timMatHangTheoTen(ten);
  return res.status(200).json({
    status: 'success',
    lenght: docs.length,
    result: docs,
  })
}