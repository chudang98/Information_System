'use strict';
const moment = require('moment');

module.exports = {
  up: (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkInsert('People', [{
        name: 'John Doe',
        isBetaMember: false
      }], {});
    */
   return queryInterface.bulkInsert('CuaHangs', [
    {
      _id: 1,
      ten: 'Chi nhánh Hà Nội',
      diaChi: 'Hà Nội',
      moTa: 'Không có mô tả',
    },
    {
      _id: 2,
      ten: 'Chi nhánh Hồ Chí Minh',
      diaChi: 'Hồ Chí Minh',
      moTa: 'Không có mô tả',
    }
    ], {});
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('People', null, {});
    */
  }
};
