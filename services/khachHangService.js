const KhachHang = require('../models/KhachHang');
const Nguoi = require('../models/Nguoi');

module.exports = {
  luuKhachHang,
  checkAccount,
  loginAccount,
};

async function luuKhachHang() {}

async function checkAccount() {}

async function loginAccount(username, password) {
  if (_.isEmpty(username) || _.isEmpty(password)) return { status: 'wrong' };
  const user = await KhachHang.findOne({ userName: username }).select(
    '+password'
  );
  if (!user || !(await user.isCorrectPassword(password, user.password))) {
    return { status: 'wrong' };
  }
  return {
    status: 'true',
  };
}
