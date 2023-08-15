'use strict';
const {
  Model
} = require('sequelize');
const { convertMinutesToSeconds } = require('../helpers/converter')
module.exports = (sequelize, DataTypes) => {
  class Song extends Model {
    static associate(models) {
      Song.belongsTo(models.Band, { foreignKey: "BandId" })
    }

    convertDuration(duration) {
      return convertMinutesToSeconds(duration)
    }

    // static getSongAndBandName() {
    //   return Song.findAll({})
    // }
  };
  Song.init({
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: {
          args: true,
          msg: 'Nama lagu tidak boleh kosong!'
        },
        checkCharacterLength(value) {
          if (value.length < 2 && value.length > 0) {
            throw new Error('Nama lagu minimal 2 karater')
          }
        }
      }
    },
    duration: {
      type: DataTypes.INTEGER,
      allowNull: false,
      validate: {
        notEmpty: {
          args: true,
          msg: 'Durasi tidak boleh kosong!'
        },
        min: {
          args: 1,
          msg: 'Durasi minimal 1 menit'
        }
      }
    },
    genre: DataTypes.STRING,
    BandId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Song',
  });
  return Song;
};