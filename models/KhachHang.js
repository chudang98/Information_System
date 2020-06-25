'use strict';
module.exports = (sequelize, Sequelize) => {
  const KhachHang = sequelize.define('KhachHang', {
    _id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: Sequelize.INTEGER
    },
    moTa: Sequelize.STRING,
    userName: Sequelize.STRING,
    password: Sequelize.STRING,
  }, {});
  KhachHang.associate = function(models) {
    // KhachHang.belongsTo(models.Nguoi, { foreignKey: 'CuaHangid', sourceKey: '_id' });
  };
  return KhachHang;
};