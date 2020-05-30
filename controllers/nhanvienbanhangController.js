module.exports = {
  getSignup,
  getLogin,
  homeView,
  themKhachHang,
};

async function getSignup(req, res) {
  return res.status(200).render('seller/themkh', {});
}
async function getLogin(req, res) {
  return res.status(200).render('seller/banhang', {});
}

async function homeView(req, res) {
  return res.status(200).render('seller/banhang', {});
}

async function themKhachHang(req, res) {
  return res.status(200).render('seller/themkh');
}
