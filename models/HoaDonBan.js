'use strict';
module.exports = (sequelize, DataTypes) => {
  const HoaDonBan = sequelize.define('HoaDonBan', {
    _id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: Sequelize.INTEGER
    },
    thoiGian: DataTypes.DATE,
    xepHang: DataTypes.INTEGER,
    noiDung: DataTypes.STRING,
    trangThai: DataTypes.STRING,
  }, {});
  HoaDonBan.associate = function(models) {
    // associations can be defined here
    // HoaDonBan.belongsTo(models.KhachHang, { foreignKey: 'KhachHangid', sourceKey: '_id' })
    // HoaDonBan.belongsTo(models.KhachHang, { foreignKey: 'KhachHangid', sourceKey: '_id' })
  };
  return HoaDonBan;
};