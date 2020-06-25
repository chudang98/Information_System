'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable(
      'Nguois', {
        _id: {
          allowNull: false,
          autoIncrement: true,
          primaryKey: true,
          type: Sequelize.INTEGER
        },
        ten: {
          type: Sequelize.STRING,
          allowNull: false,
        },
        diaChi: {
          type: Sequelize.STRING,
          allowNull: false,
        },
        ngaySinh: {
          type: Sequelize.DATEONLY,
          allowNull: false,
        },
        gioiTinh: {
          type: Sequelize.ENUM('Nam', 'Nữ'),
          allowNull: false,
        },
        email: {
          type: Sequelize.STRING,
          allowNull: false,
        },
        sdt: {
          type: Sequelize.STRING,
          allowNull: false,
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
    return queryInterface.dropTable('Nguois');
  }
};