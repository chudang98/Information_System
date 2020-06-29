const db = require('../models');
const HDBan = db.HoaDonBan;
const HDChitiet = db.HoaDonBanChiTiet;
const moment = require('moment');

module.exports = {
	layHoaDonBanTheoUser,
  thanhToanHoaDon,
  themHoaDonBan,
};

async function layHoaDonBanTheoUser(idUser) {

}

/*
  {
    "soLuong": 3,
    "data": [
      {
        "id": "1313123",
        "soLuong": 10
      },
      {
        "id": "1313123",
        "soLuong": 10
      },
      {
        "id": "1313123",
        "soLuong": 10
      }
    ]
  }
*/
async function themHoaDonBan(data) {
  const hoaDonBan = await HDBan.create({
    thoiGian: moment(),
    trangThai: 'Chờ xử lý',
  });
  
}

async function thanhToanHoaDon(idHoaDon) {
	
}
