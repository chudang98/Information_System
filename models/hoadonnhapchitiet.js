'use strict';
module.exports = (sequelize, DataTypes) => {
  const HoaDonNhapChiTiet = sequelize.define('HoaDonNhapChiTiet', {
    soLuong: DataTypes.INTEGER,
    donGia: DataTypes.INTEGER
  }, {});
  HoaDonNhapChiTiet.associate = function(models) {
    // associations can be defined here
  };
  return HoaDonNhapChiTiet;
};