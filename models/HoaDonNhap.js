'use strict';
module.exports = (sequelize, Sequelize) => {
  const HoaDonNhap = sequelize.define('HoaDonNhap', {
    _id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: Sequelize.INTEGER,
    },
    thoiGian: Sequelize.DATE
  }, {});
  HoaDonNhap.associate = function(models) {
    // associations can be defined here
  };
  return HoaDonNhap;
};