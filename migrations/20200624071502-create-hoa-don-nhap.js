'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('HoaDonNhaps', {
      _id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      thoiGian: {
        type: Sequelize.DATE
      },
      NhanVienid: {
        type: Sequelize.INTEGER,
        references: {
          model: 'NhanViens',
          key: '_id',
        },
      },
      NhaCungCapid: {
        type: Sequelize.INTEGER,
        references: {
          model: 'NhaCungCaps',
          key: '_id',
        }
      },
      createdAt: {
        type: Sequelize.DATE
      },
      updatedAt: {
        type: Sequelize.DATE
      },
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('HoaDonNhaps');
  }
};