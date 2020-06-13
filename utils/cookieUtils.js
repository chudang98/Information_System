const jwt = require('jsonwebtoken');
const { promisify } = require('util');

const User = require('../models/NhanVien');

module.exports = {
  setTokenCookie,
  checkUserByCookie,
  getUserByCookie,
};

async function setTokenCookie(dataUser, response) {
  let token = await _createToken(dataUser);
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
  var decoded = await _decodeCookie(jwtCookie);
  const user = await User.findById(decoded.id);
  if (!user) return false;
  if (user.isChangedPasswordAfter(decoded.iat)) return false;
  return true;
}

async function getUserByCookie(jwtCookie) {
  var decoded = await _decodeCookie(jwtCookie);
  const user = await User.findById(decoded.id);
  if(!user)
    return {
      status: 'null',
    }
  else  
    return {
      status: 'had',
      user,
    }
}

async function _decodeCookie(jwtCookie){
  const decoded = await promisify(jwt.verify)(
    jwtCookie,
    process.env.JWT_SECRET
  );
  return decoded;
}

const _createToken = async (data) => {
  var objectData = {
    id: data.id,
    username: data.userName,
  };
  const token = jwt.sign(objectData, process.env.JWT_SECRET, {
    expiresIn: process.env.JWT_EXPIRES_IN,
  });
  return token;
};
