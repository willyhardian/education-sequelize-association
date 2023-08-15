'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.addColumn('Managers', 'BandId', {
      type: Sequelize.INTEGER,
      references: {
        model: 'Bands',
        key: 'id'
      },
      onUpdate: 'cascade',
      onDelete: 'cascade'
    });
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.removeColumn('Managers', 'BandId', {}); 
  }
};
