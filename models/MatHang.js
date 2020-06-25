'use strict';
module.exports = (sequelize, DataTypes) => {
  const MatHang = sequelize.define('MatHang', {
    soLuong: DataTypes.INTEGER,
    giaNhap: DataTypes.INTEGER,
    giaBan: DataTypes.INTEGER,
    ten: DataTypes.STRING,
    loai: DataTypes.STRING,
    mauSac: DataTypes.STRING,
    kichCo: DataTypes.STRING,
    rating: DataTypes.INTEGER
  }, {});
  MatHang.associate = function(models) {
    // associations can be defined here
  };
  return MatHang;
};