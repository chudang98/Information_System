const jwt = require('jsonwebtoken');
const { promisify } = require('util');

const db = require('../models');
const User = db.KhachHang;

module.exports = {
  setTokenCookie,
  // checkUserByCookie,
  getUserByCookie,
  _createToken,
  _decodeCookie,
};

async function setTokenCookie(dataUser, response) {
  let token = await _createToken(dataUser);
  let cookieOption = {
    expires: new Date(
      Date.now() + process.env.JWT_COOKIE_EXPORES_IN * 86400000000
    ),
    secure: false,
    httpOnly: false,
  };
  response.cookie('jwt', token, cookieOption);
}

// async function checkUserByCookie(jwtCookie) {
//   var decoded = await _decodeCookie(jwtCookie);
//   const user = await User.findById(decoded.id);
//   if (!user) return false;
//   if (user.isChangedPasswordAfter(decoded.iat)) return false;
//   return true;
// }

async function getUserByCookie(jwtCookie) {
  var decoded = await _decodeCookie(jwtCookie);
  const user = await User.findOne({ 
    where: {
      _id: decoded.id, 
    },
    raw: true,
    nest: true,
  });
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

async function _createToken(data){
  var objectData = {
    id: data._id,
    username: data.userName,
  };
  const token = jwt.sign(objectData, process.env.JWT_SECRET, {
    expiresIn: process.env.JWT_EXPIRES_IN,
  });
  return token;
};
