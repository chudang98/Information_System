'use strict';
module.exports = (sequelize, DataTypes) => {
  const HoaDonBan = sequelize.define('HoaDonBan', {
    thoiGian: DataTypes.DATE,
    xepHang: DataTypes.INTEGER,
    noiDung: DataTypes.STRING
  }, {});
  HoaDonBan.associate = function(models) {
    // associations can be defined here
  };
  return HoaDonBan;
};