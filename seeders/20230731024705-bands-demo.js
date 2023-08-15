'use strict';
const fs = require('fs');

module.exports = {
  up: (queryInterface, Sequelize) => {
    let data = fs.readFileSync("./data/bands.json", "utf8")
    data = JSON.parse(data)

    data.forEach(e => {
      delete e.id
      e.createdAt = new Date()
      e.updatedAt = new Date()
    })

    return queryInterface.bulkInsert("Bands", data)
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Bands', null, {});
  }
};
