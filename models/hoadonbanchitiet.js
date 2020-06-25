'use strict';
module.exports = (sequelize, DataTypes) => {
  const HoaDonBanChiTiet = sequelize.define('HoaDonBanChiTiet', {
    soLuong: DataTypes.INTEGER,
    donGia: DataTypes.INTEGER
  }, {});
  HoaDonBanChiTiet.associate = function(models) {
    // associations can be defined here
  };
  return HoaDonBanChiTiet;
};