const KhachHang = require('../models/KhachHang');
const Nguoi = require('../models/Nguoi');
const NhanVien = require('../models/NhanVien');
const _ = require('lodash');

module.exports = {
	checkNhanVienLogin,
	nhanVienSignup,
	checkUserLogin, 
	userSignup,
}

async function checkNhanVienLogin(username, password){
  if (_.isEmpty(username) || _.isEmpty(password)) return { status: 'fail' };
  const user = await NhanVien.findOne({ userName: username }).select(
    '+password'
  );
  if (!user || !(await user.isCorrectPassword(password, user.password))) {
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
		var nhanVien = new NhanVien({
			userName: data.userName,
			password: data.password,
			chucVu: data.chucVu,
			nguoi: nguoi._id,
    })
    await nhanVien.save();
		return {
      status: 'success',
      infor: nhanVien,
		}
	}catch(err){
		return {
			status: 'fail',
		}
	}
}

async function checkUserLogin(username, password){
	if (_.isEmpty(username) || _.isEmpty(password)) return { status: 'wrong' };
  const user = await KhachHang.findOne({ userName: username }).select(
    '+password'
  );
  if (!user || !(await user.isCorrectPassword(password, user.password))) {
    return { status: 'fail' };
  }
  return {
    status: 'success',
    infor: user,
  };
}

async function userSignup(data){	
	try{
		var nguoi = await _createNguoi(data);
		var user = new KhachHang({
			nguoi: nguoi._id,
			userName: data.userName,
			password: data.password,
		});
		await user.save();
		return {
      status: 'success',
      infor: user,
		}
	}catch(err){
		return {
			status: 'fail',
		}
	}
}

async function _createNguoi(dataNguoi){
	var newNguoi = new Nguoi({
		ten: dataNguoi.ten,
		diaChi: dataNguoi.diaChi,
		ngaySinh: dataNguoi.ngaySinh,
		gioiTinh: dataNguoi.gioiTinh,
		email: dataNguoi.email,
		sdt: dataNguoi.sdt,
	});
  await newNguoi.save();
  return newNguoi;
}