module.exports = {
  getSignup,
  getLogin,
  homeView,
  banHangView,
  themKHview,
};

async function getSignup(req, res) {
  return res.status(200).render('seller/thongtinkh', {});
}
async function getLogin(req, res) {
  return res.status(200).render('seller/banhang', {});
}

async function homeView(req, res) {
  return res.status(200).render('seller/banhang', {});
}

async function banHangView(req, res) {
  return res.status(200).render('seller/banhang', {});
}
async function themKHview(req, res) {
  return res.status(200).render('seller/themkh', {});
}
