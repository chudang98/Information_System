const nhanVienService = require('../services/nhanVienServices');
const khachHangService = require('../services/khachHangService');

module.exports = {
  checkAccountNhanVien,
};

async function checkAccountNhanVien(req, res) {
  var { userName } = req.body;
  var check = await nhanVienService.isExistAccount(userName);
  console.log(userName, check);

  return res.status(200).json({
    status: 'success',
    exist: check,
  });
}

async function checkAccountKhachHang(req, res) {
  var { userName } = req.body;
  return res.status(200).json({
    status: 'success',
  });
}
