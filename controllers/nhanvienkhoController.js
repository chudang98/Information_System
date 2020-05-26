const nhanVienService = require('../services/nhanVienServices.js');

module.exports = {
  getLogin,
  checkLogin,
};

async function getLogin(req, res) {
  return res.status(200).render('nhanvien/login', {});
}

async function checkLogin(req, res) {
  var { username, password } = req.body;
  var result = await nhanVienService.loginAccount(username, password);
  console.log(result);
  return res.status(200).render('nvkho/home', {});
}
