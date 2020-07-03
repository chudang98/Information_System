'use strict';
module.exports = (sequelize, DataTypes) => {
  const DanhGia = sequelize.define('DanhGia', {
    nhanXet: DataTypes.STRING,
    danhGia: DataTypes.INTEGER,

  }, {});
  DanhGia.associate = function(models) {
    // associations can be defined here
    DanhGia.belongsTo(models.KhachHang, {
      foreignKey: 'KhachHangid',
      targetKey: '_id',
      as: 'khachhang',
    });
    DanhGia.belongsTo(models.MatHang, {
      foreignKey: 'MatHangid',
      targetKey: '_id',
    })
  };
  return DanhGia;
};