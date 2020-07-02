const db = require('../models');
const Nguoi = db.Nguoi;
const KhachHang = db.KhachHang;

module.exports = {
  luuKhachHang,
  checkAccount,
  getAllClient,
  getClientById,
  updateInfor,
};

async function luuKhachHang(data) {

}

async function checkAccount() {}

async function getClientById(idCustomer){
  var data = await KhachHang.findOne({
    where: {
      _id: idCustomer,
    },
    include: 'nguoi',
    raw: true,
    nest: true,
  });
  return data;
}

async function getAllClient() {
    var clients = await KhachHang.findAll({
      raw: true,
      nest: true,
      include: 'nguoi',
    });
    return clients;
}

async function updateInfor(data, idCustomer){
  var customer = await KhachHang.findOne({
    where: {
      _id: idCustomer,
    },
    raw: true,
    nest: true,
  });
  await KhachHang.update( data, 
  {
    where: {
      _id: customer.Nguoiid,
    }
  })
  return {
    status: 'success',
  }
}

// async function getClientById(id) {
//   var client = await Client
// }