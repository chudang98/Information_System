const HoaDonNhap = require('../models/HoaDonNhap');

module.exports = {
	layHoaDonNhap,
};

async function layHoaDonNhap(idHD) {
	const hoaDon = await HoaDonNhap.findOne({ _id : idHD });

}