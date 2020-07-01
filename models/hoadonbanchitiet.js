'use strict';
module.exports = (sequelize, DataTypes) => {
  const HoaDonBanChiTiet = sequelize.define('HoaDonBanChiTiet', {
    _id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER
    },
    soLuong: DataTypes.INTEGER,
    donGia: DataTypes.INTEGER,
  }, {});
  HoaDonBanChiTiet.associate = function(models) {
    // associations can be defined here
    HoaDonBanChiTiet.belongsTo(models.HoaDonNhap, {
      foreignKey: 'HDBanid',
      sourceKey: '_id',
    })
    HoaDonBanChiTiet.belongsTo(models.MatHang, {
      foreignKey: 'MatHangid',
      sourceKey: '_id',
    })
  };
  return HoaDonBanChiTiet;
};