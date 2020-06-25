'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('HDNhapChiTiets', {
      _id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      soLuong: {
        type: Sequelize.INTEGER
      },
      donGia: {
        type: Sequelize.INTEGER
      },
      HDNhapid: {
        type: Sequelize.INTEGER,
        references: {
          model: 'HDNhaps',
          key: '_id',
        }
      },
      MatHangid: {
        type: Sequelize.INTEGER,
        references: {
          model: 'MatHangs',
          key: '_id',
        }
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
    return queryInterface.dropTable('HDNhapChiTiets');
  }
};