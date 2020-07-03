'use strict';
const bcrypt = require('bcryptjs');

module.exports = (sequelize, Sequelize) => {
  const NhanVien = sequelize.define('NhanVien', {
    _id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: Sequelize.INTEGER
    },
    userName: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    password: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    chucVu: {
      type: Sequelize.ENUM('NhanVienKho', 'NhanVienBanHang', 'NhanVienQuanLy'),
      allowNull: false,
    },
    createdAt: {
      allowNull: true,
      type: Sequelize.DATE
    },
    updatedAt: {
      allowNull: true,
      type: Sequelize.DATE
    },
  },{
    hooks: {
      beforeCreate: async (user, option) => {
        user.password = await bcrypt.hash(user.password, 12);
      }
    }
  });
  NhanVien.associate = function(models) {
    NhanVien.belongsTo(models.Nguoi, {
      foreignKey: 'Nguoiid',
      targetKey: '_id',
      as: 'nguoi',
    });
    NhanVien.belongsTo(models.CuaHang, {
      foreignKey: 'CuaHangid',
      targetKey: '_id',
      as: 'cuahang',
    });
    NhanVien.hasMany(models.HoaDonBan)
    // NhanVien.belongsTo(models.Nguoi, { foreignKey: 'Nguoiid', sourceKey: '_id' });
    // NhanVien.belongsTo(models.CuaHang, { foreignKey: 'CuaHangid', sourceKey: '_id' });
  };
  return NhanVien;
};