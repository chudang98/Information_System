const nhanVienService = require('../services/nhanVienServices');
const cookieUtils = require('../utils/cookieUtils');

module.exports = {
  getSignup,
  signupAcc,
  getLogin,
  checkLogin,
  getHome,
};

async function getSignup(req, res) {
  return res.status(200).render('nhanvien/signup', {});
}

async function getLogin(req, res) {
  return res.status(200).render('nhanvien/login', {});
}

async function signupAcc(req, res) {
  var data = req.body;
  var result = await nhanVienService.saveAccount(data);
  console.log(result);
  if (result.status == 'success') {
    var idUser = result.nhanvien._id;
    cookieUtils.setTokenCookie(idUser, res);
    return res.redirect('/user/home');
  } else return res.redirect('/user/login');
}

async function checkLogin(req, res) {
  var { username, password } = req.body;
  var result = await nhanVienService.loginAccount(username, password);
  if (result.status == 'true') {
    return res.status(200).render('nvkho/home', {});
  } else {
    return res.status(400).render('nvk/', {
      error: 'Tài khoản đăng nhập sai',
    });
  }
}

async function getHome(req, res) {
  return res.status(200).render('nvkho/home', {});
}
