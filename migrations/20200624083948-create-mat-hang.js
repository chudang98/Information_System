'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('MatHangs', {
      _id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      soLuong: {
        type: Sequelize.INTEGER
      },
      giaNhap: {
        type: Sequelize.INTEGER
      },
      giaBan: {
        type: Sequelize.INTEGER
      },
      ten: {
        type: Sequelize.STRING
      },
      loai: {
        type: Sequelize.STRING
      },
      mauSac: {
        type: Sequelize.STRING
      },
      kichCo: {
        type: Sequelize.STRING
      },
      rating: {
        type: Sequelize.INTEGER
      },
      Anh: {
        type: Sequelize.STRING,
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
    return queryInterface.dropTable('MatHangs');
  }
};