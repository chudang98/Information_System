'use strict';
module.exports = (sequelize, DataTypes) => {
  const DanhGia = sequelize.define('DanhGia', {
    nhanXet: DataTypes.STRING,
    danhGia: DataTypes.INTEGER
  }, {});
  DanhGia.associate = function(models) {
    // associations can be defined here
  };
  return DanhGia;
};