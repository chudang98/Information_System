const nvkService = require('../services/nhanVienKhoService');

module.exports = {
  getSignup,
  signupAcc,
};

async function getSignup(req, res) {
  return res.status(200).render('nvkho/signup', {});
}

async function signupAcc(req, res) {
  var result = await nvkService.addDemoNVK();
  return res.status(200).render('nvkho/home', {
    result,
  });
}
