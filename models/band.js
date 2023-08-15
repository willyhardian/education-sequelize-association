'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Band extends Model {
    static associate(models) {
      Band.hasOne(models.Manager, {
        foreignKey: "BandId"
      })
      Band.hasMany(models.Song, { foreignKey: "BandId" })
    }
  };
  Band.init({
    name: DataTypes.STRING,
    debutYear: DataTypes.INTEGER,
    domisili: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Band',
  });
  return Band;
};