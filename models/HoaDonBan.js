'use strict';
module.exports = (sequelize, DataTypes) => {
  const HoaDonBan = sequelize.define('HoaDonBan', {
    _id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER
    },
    thoiGian: DataTypes.DATE,
    xepHang: DataTypes.INTEGER,
    noiDung: DataTypes.STRING,
    trangThai: DataTypes.STRING,
  }, {});
  HoaDonBan.associate = function(models) {
    // associations can be defined here
    HoaDonBan.belongsTo(models.KhachHang, { 
      foreignKey: 'KhachHangid',
      sourceKey: '_id',
      as: 'khachhang',
    });
    HoaDonBan.belongsTo(models.Nguoi, { 
      through: 'KhachHang',
      foreignKey: '_id',
      sourceKey: '_id',
      as: 'nguoi_khach_hang',
    });
    HoaDonBan.belongsTo(models.Nguoi, { 
      through: 'NhanVien',
      foreignKey: '_id',
      sourceKey: '_id',
      as: 'nguoi_nhan_vien',
    });
    HoaDonBan.belongsTo(models.NhanVien, {
      foreignKey: 'NhanVienid',
      sourceKey: '_id',
      as: 'nhanvien'
    });
    HoaDonBan.belongsToMany(models.MatHang, {
      through: 'HoaDonBanChiTiet',
      foreignKey: 'HDBanid',
      sourceKey: '_id',
      as: 'mathang',
    });
    HoaDonBan.hasMany(models.HoaDonBanChiTiet, {
      foreignKey: 'HDBanid',
      targetKey: '_id',
    })
  };

  return HoaDonBan;
};