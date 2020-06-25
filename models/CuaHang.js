'use strict';
module.exports = (sequelize, DataTypes) => {
  const CuaHang = sequelize.define('CuaHang', {
    ten: DataTypes.STRING,
    diaChi: DataTypes.STRING
  }, {});
  CuaHang.associate = function(models) {
    // associations can be defined here
  };
  return CuaHang;
};