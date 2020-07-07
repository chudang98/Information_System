'use strict';
module.exports = (sequelize, DataTypes) => {
  const DanhGia = sequelize.define('DanhGia', {
    _id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER
    },
    nhanXet: DataTypes.STRING,
  }, {
    freezeTableName: true,
    tableName: 'DanhGias',
  });
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
      as: 'nguoi',
    })
  };
  return DanhGia;
};