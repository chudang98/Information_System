const authService = require('../services/authenticateService');
const cookieUtils = require('../utils/cookieUtils');

module.exports = {
  authAccNhanVien,
  authAccKhachHang,
};

async function authAccNhanVien(req, res) {
  var { userName, password } = req.body;
  var result = await authService.checkNhanVienLogin(userName, password);
  if (result.status == 'fail')   return res.redirect('/user/login'); 
  else {
    var user = result.infor;
    await cookieUtils.setTokenCookie(user, res);
    return _chuyenTrangLogin(user.chucVu, res);
  }
}

async function authAccKhachHang(req, res) {
  // var { userName } = req.body;
  // return res.status(200).json({
  //   status: 'success',
  // });
}

function _chuyenTrangLogin(chucVu, res){
  switch(chucVu){
    case "NhanVienQuanLy" : {
      return res.redirect('/user/home');
    };
    case "NhanVienBanHang" : {
      return res.redirect('/seller/banhang');
    };
    default:
      return res.redirect('/user/login');
  }
}

