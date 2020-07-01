'use strict';
module.exports = (sequelize, Sequelize) => {
  const MatHang = sequelize.define('MatHang', {
    _id: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
    },
    soLuong: {
      type: Sequelize.INTEGER,
    },
    giaNhap: {
      type: Sequelize.INTEGER,
    },
    giaBan: {
      type: Sequelize.INTEGER,
    },
    ten: {
      type: Sequelize.STRING,
    },
    loai: {
      type: Sequelize.STRING,
    },
    mauSac: {
      type: Sequelize.STRING,
    },
    kichCo: {
      type: Sequelize.STRING,
    },
    rating: {
      type: Sequelize.INTEGER,
    },
    Anh: {
      type: Sequelize.STRING,
    }
  }, {

  });
  MatHang.associate = function(models) {
    MatHang.belongsToMany(models.HoaDonBan, {
      through: 'HoaDonBanChiTiet',
      foreignKey: 'MatHangid',
      sourceKey: '_id',
    })
  };
  return MatHang;
};