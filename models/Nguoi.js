'use strict';

const bcrypt = require('bcryptjs');
module.exports = (sequelize, Sequelize) => {
  const Nguoi = sequelize.define('Nguoi', {
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
      allowNull: true,
      type: Sequelize.DATE
    },
    updatedAt: {
      allowNull: true,
      type: Sequelize.DATE
    }
  }, {}
  );
  Nguoi.associate = function(models) {
    // associations can be defined here
  };
  return Nguoi;
};