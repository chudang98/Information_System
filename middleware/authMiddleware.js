const KhachHang = require('../models/NhanVien');
const NhanVien = require('../models/NhanVien');
const jwtUtil = require('../utils/cookieUtils');

module.exports = {
  checkLoginNhanVien,
  checkLoginUser,
}

async function checkLoginUser(req, res, next) {
  if(req.cookies.jwt){
    try{
      
    }catch(err){

    }
  }
}

async function checkLoginNhanVien(req, res, next) {

}