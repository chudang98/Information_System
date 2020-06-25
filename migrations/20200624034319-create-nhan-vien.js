'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('NhanViens', {
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
        type: Sequelize.STRING,
        allowNull: false,
      },
      Nguoiid: {
        type: Sequelize.INTEGER,
        references: {
          model: 'Nguois',
          key: '_id',
        }
      },
      CuaHangid: {
        type: Sequelize.INTEGER,
        references: {
          model: 'CuaHangs',
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
    return queryInterface.dropTable('NhanViens');
  }
};