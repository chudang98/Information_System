const NhanVien = require('../models/NhanVien');

const _ = require('lodash');
module.exports = {
  checkLogin,
  loginAccount,
};

async function checkLogin(username, password) {}

async function loginAccount(username, password) {
  if (_.isEmpty(username) || _.isEmpty(password)) return { status: 'wrong' };
  const user = await NhanVien.findOne({ userName: username }).select(
    '+password'
  );
  if (!user || !(await user.isCorrectPassword(password, user.password))) {
    return { status: 'wrong' };
  }
  return { status: 'true' };
}
