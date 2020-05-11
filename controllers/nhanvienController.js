module.exports = {
  getSignup,
  signupAcc,
};

async function getSignup(req, res) {
  return res.status(200).render('nvkho/signup', {});
}

async function signupAcc(req, res) {}
