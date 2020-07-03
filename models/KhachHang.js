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
    moTa: {
      type: Sequelize.STRING,
      allowNull: true,
    },
    userName: {
      type: Sequelize.STRING,
      allowNull: true,
    },
    password: {
      type: Sequelize.STRING,
      allowNull: true,
    },
    // Nguoiid: Sequelize.STRING,
  }, {
    hooks: {
      beforeCreate: async (user, option) => {
        if(user.password)
          user.password = await bcrypt.hash(user.password, 12);
      }
    }
    
  });

  KhachHang.associate = function(models) {
    KhachHang.belongsTo(models.Nguoi, {
      foreignKey: 'Nguoiid',
      targetKey: '_id',
      as: 'nguoi',
    });
    KhachHang.hasMany(models.HoaDonBan, {
      foreignKey: 'KhachHangid',
      sourceKey: '_id',
      as: 'khachhang',
    });

    KhachHang.hasMany(models.DanhGia, {
      foreignKey: 'KhachHangid',
      sourceKey: '_id',
      as: 'danhgia',
    })
  };
  return KhachHang;
};