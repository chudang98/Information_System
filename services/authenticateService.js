const db = require('../models');
const KhachHang = require('../models/KhachHang')(db.sequelize, db.Sequelize);
const Nguoi = require('../models/Nguoi')(db.sequelize, db.Sequelize);
const NhanVien = require('../models/NhanVien')(db.sequelize, db.Sequelize);
const _ = require('lodash');
const bcrypt = require('bcryptjs');

module.exports = {
	checkNhanVienLogin,
	nhanVienSignup,
	checkUserLogin, 
	userSignup,
}

async function checkNhanVienLogin(username, password){
  if (_.isEmpty(username) || _.isEmpty(password)) return { status: 'fail' };
  const user = await NhanVien.findOne({ 
    where: {
      userName: username,
    },
    raw: true,
    nest: true,
  });

  if (!user || !_validatePassword(password, user) == false) {
    return { status: 'fail' };
  }

  return {
    status: 'success',
    infor: user,
  };
}

async function nhanVienSignup(data){
	try{
		var nguoi = await _createNguoi(data);
		var nhanVien = NhanVien.create({
			userName: data.userName,
			password: data.password,
			chucVu: data.chucVu,
      Nguoiid: nguoi._id,
      CuaHangid: 1,
    })
		return {
      status: 'success',
      infor: nhanVien.toJSON(),
		}
	}catch(err){
		return {
			status: 'fail',
		}
	}
}

async function checkUserLogin(username, password){
	if (_.isEmpty(username) || _.isEmpty(password)) return { status: 'fail' };
  const user = await KhachHang.findOne({ 
    where: {
      userName: username,
    },
    raw: true,
    nest: true,
  });
  var checkAcc = await _validatePassword(password, user);
  if ( !user ||  checkAcc == false ) {
    return { status: 'fail' };
  }else
    return {
      status: 'success',
      infor: user,
    };
}

async function userSignup(data){	
	try{
		var nguoi = await _createNguoi(data);
		var user = await KhachHang.create({
			Nguoiid: nguoi._id,
			userName: !_.isEmpty(data.userName) ? data.userName : null,
			password: !_.isEmpty(data.password) ? data.password : null,
		});
		return {
      status: 'success',
      infor: user.toJSON(),
		}
	}catch(err){
    console.log(err);
		return {
			status: 'fail',
		}
	}
}

async function _createNguoi(dataNguoi){
	var newNguoi = await Nguoi.create({
		ten: dataNguoi.ten,
		diaChi: dataNguoi.diaChi,
		ngaySinh: dataNguoi.ngaySinh,
		gioiTinh: dataNguoi.gioiTinh,
		email: dataNguoi.email,
		sdt: dataNguoi.sdt,
  });
  var data = newNguoi.toJSON();  
  return data;
}

async function _validatePassword(plainText, account){
  var bool = bcrypt.compareSync(plainText, account.password);
  return bool;
}