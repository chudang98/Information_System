const nhanVienService = require('../services/nhanVienServices');
const cookieUtils = require('../utils/cookieUtils');

module.exports = {
  authAccNhanVien,
  authAccKhachHang,
};

async function authAccNhanVien(req, res) {
  var { userName, password } = req.body;
  var result = await nhanVienService.loginAccount(userName, password);

  if (result.status == 'fail') return { status: 'fail' };
  else {
    cookieUtils.setTokenCookie(result._id, res);
    res.status(200).json({
      status: 'success',
    });
  }
  return res.status(200).json({
    status: 'success',
    exist: check,
  });
}

async function authAccKhachHang(req, res) {
  var { userName } = req.body;
  return res.status(200).json({
    status: 'success',
  });
}

async function checkCookieLogin(req, res) {}
