const db = require('../models');
const Nguoi = db.Nguoi;
const KhachHang = db.KhachHang;

module.exports = {
  luuKhachHang,
  checkAccount,
  getAllClient,
};

async function luuKhachHang() {}

async function checkAccount() {}

async function getAllClient() {
    var clients = await KhachHang.findAll({
      raw: true,
      nest: true,
      include: 'nguoi',
    });
    return clients;
}

// async function getClientById(id) {
//   var client = await Client
// }