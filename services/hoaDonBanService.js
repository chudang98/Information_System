const db = require('../models');
const HDBan = require('../models/HoaDonBan')(db.sequelize, db.sequelize);
const HDChitiet = require('../models/hoadonbanchitiet')(db.sequelize, db.sequelize);
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
