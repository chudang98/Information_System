'use strict';
module.exports = (sequelize, DataTypes) => {
  const CuaHang = sequelize.define('CuaHang', {
    _id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER
    },
    ten: DataTypes.STRING,
    diaChi: DataTypes.STRING
  }, {});
  CuaHang.associate = function(models) {
    // associations can be defined here
    CuaHang.hasMany(models.NhanVien, {
      sourceKey: '_id',
      foreignKey: 'CuaHangid',
    })
  };
  return CuaHang;
};