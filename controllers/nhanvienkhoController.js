module.exports = {
  getLogin,
  checkLogin,
};

async function getLogin(req, res) {
  return res.status(200).render('nvkho/login', {});
}

async function checkLogin(req, res) {
  return res.status(200).render('nvkho/home', {});
}
