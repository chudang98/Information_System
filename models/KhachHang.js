'use strict';
const bcrypt = require('bcryptjs');

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
  }, {
    hooks: {
      beforeCreate: async (user, option) => {
        user.password = await bcrypt.hash(user.password, 12);
      }
    }
    
  });
  KhachHang.associate = function(models) {
    // KhachHang.belongsTo(models.Nguoi, { foreignKey: 'CuaHangid', sourceKey: '_id' });
  };
  return KhachHang;
};