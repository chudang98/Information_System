'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('DanhGias', {
      _id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      nhanXet: {
        type: Sequelize.STRING
      },
      HDBanChiTiet: {
        type: Sequelize.INTEGER,
        references: {
          model: 'HDBanChiTiets',
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
    return queryInterface.dropTable('DanhGias');
  }
};