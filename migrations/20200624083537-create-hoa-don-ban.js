'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('HDBans', {
      _id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      thoiGian: {
        type: Sequelize.DATE
      },
      xepHang: {
        type: Sequelize.INTEGER
      },
      noiDung: {
        type: Sequelize.STRING
      },
      NhanVienid: {
        type: Sequelize.INTEGER,
        references: {
          model: 'NhanViens',
          key: '_id',
        },
      },
      KhachHangid: {
        type: Sequelize.INTEGER,
        references: {
          model: 'KhachHangs',
          key: '_id',
        },
      },
      createdAt: {
        type: Sequelize.DATE
      },
      updatedAt: {
        type: Sequelize.DATE
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('HDBans');
  }
};