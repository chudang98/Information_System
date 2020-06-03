const jwt = require('jsonwebtoken');
const { promisify } = require('util');

const User = require('../models/NhanVien');

module.exports = {
  setTokenCookie,
  checkUserByCookie,
};

async function setTokenCookie(idUser, response) {
  let token = _createToken(idUser);
  let cookieOption = {
    expires: new Date(
      Date.now() + process.env.JWT_COOKIE_EXPORES_IN * 86400000000
    ),
    secure: false,
    httpOnly: true,
  };
  response.cookie('jwt', token, cookieOption);
}

async function checkUserByCookie(jwtCookie) {
  const decoded = await promisify(jwt.verify)(
    jwtCookie,
    process.env.JWT_SECRET
  );
  const user = await User.findById(decoded.id);
  if (!user) return false;
  if (user.isChangedPasswordAfter(decoded.iat)) return false;
  return true;
}

const _createToken = (idUser) => {
  return jwt.sign({ id: idUser }, process.env.JWT_SECRET, {
    expiresIn: process.env.JWT_EXPIRES_IN,
  });
};
