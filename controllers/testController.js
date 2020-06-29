const matHangService = require('../services/matHangServices');
const db = require('../models');
// const Nguoi = require('../models/nguoi')(db.sequelize, db.Sequelize);
// const KhachHang = require('../models/khachhang')(db.sequelize, db.Sequelize);
const Nguoi = db.Nguoi;
const KhachHang = db.KhachHang;
const bcrypt = require('bcryptjs');

module.exports = {
  layMatHang,
  taoNguoi,
};

async function layMatHang(req, res) {
  var mathang = await matHangService.takeProduct();
  console.log(mathang);
  return res.status(200).render('user/home', {});
}

async function taoNguoi(req, res) {
  // var data = {
  //   ten: 'Chu Dang',
  //   diaChi: 'Ha Noi',
  //   ngaySinh: '10-03-1998',
  //   gioiTinh: 'Nam',
  //   email: 'chudang98@gmail.com',
  //   sdt: '0374537192',
  // }
  // var nguoi = await Nguoi.create(data);
  // var data = nguoi.toJSON();

  //  var nguoi = await Nguoi.findOne({
  //   where: {
  //     _id: 18,
  //   },
  //   raw: true,
  //   nest: true,
  // });
  // console.log(nguoi);
  // console.log(bcrypt.compareSync('chudang98@gmail.com', nguoi.email));
 
  // var nguoi = await Nguoi.findAll({
  //   raw: true,
  //   nest: true,
  // });
  // console.log(nguoi);
  
  var khach = await KhachHang.findAll({
    raw: true,
    nest: true,
    include: 'nguoi',
  });
  console.log(khach);
  return res.json({
    status: 200,
  });
}

