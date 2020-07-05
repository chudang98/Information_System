const db = require('../models');
const Nguoi = db.Nguoi;
const KhachHang = db.KhachHang;

module.exports = {
  luuKhachHang,
  getAllClient,
  getClientById,
  updateInfor,
  timKhachHangTheoSdt,
  getDetailCustomer,
};

async function luuKhachHang(data) {
  var {
    ten, diaChi, ngaySinh, gioiTinh, sdt, email
  } = data;
  console.log(ten, diaChi);
  var nguoi = await Nguoi.create({
    ten, diaChi, ngaySinh, gioiTinh, email, sdt,
  });
  console.log(nguoi.dataValues._id);
  var kh = await KhachHang.create({
    Nguoiid: nguoi.dataValues._id,
  });
  console.log(kh);
  return false;
}

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
  await Nguoi.update( data, 
  {
    where: {
      _id: customer.Nguoiid,
    }
  })
  return {
    status: 'success',
  }
}

async function getDetailCustomer(idCustomer){
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

async function timKhachHangTheoSdt(sdt){
  var data = await Nguoi.findAll({
    where: {
      sdt: {
        [Op.like]: `%${sdt}%`,
      },
    },
    raw: true,
    nest: true,
  });
  var result = [];
  for(nguoi of data){
    await KhachHang.findOne({
      where: {
        Nguoiid: nguoi._id,
      },
      include: 'nguoi',
      raw: true,
      nest: true,
    });
    
  }
  return data;
}