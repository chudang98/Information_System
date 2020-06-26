'use strict';
module.exports = (sequelize, Sequelize) => {
  const NhaCungCap = sequelize.define('NhaCungCap', {
    _id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: Sequelize.INTEGER
    },
    moTa: Sequelize.STRING
  }, {});
  NhaCungCap.associate = function(models) {
    // associations can be defined here
    NhaCungCap.belongsTo(models.Nguoi, { foreignKey: 'Nguoiid' });
  };
  return NhaCungCap;
};