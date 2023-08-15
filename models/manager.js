'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Manager extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // PascalCase: <NamaTable>+Id
      Manager.belongsTo(models.Band, { foreignKey: "BandId" })
    }
  };
  Manager.init({
    fullName: DataTypes.STRING,
    phone: DataTypes.STRING,
    email: DataTypes.STRING,
    BandId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Manager',
    hooks : {
      beforeCreate : (manager, opt)=> {
        console.log(manager, "ini manager");
        manager.fullName = manager.fullName+"RMT-30"
      },

      afterCreate : (manager, opt) => {
        console.log(manager, "sesudh di create");
      }
    }
  });
  return Manager;
};