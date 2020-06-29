'use strict';
module.exports = (sequelize, DataTypes) => {
  const HoaDonBanChiTiet = sequelize.define('HoaDonBanChiTiet', {
    _id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: Sequelize.INTEGER
    },
    soLuong: DataTypes.INTEGER,
    donGia: DataTypes.INTEGER,
  }, {});
  HoaDonBanChiTiet.associate = function(models) {
    // associations can be defined here
  };
  return HoaDonBanChiTiet;
};