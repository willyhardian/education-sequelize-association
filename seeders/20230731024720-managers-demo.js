'use strict';
const fs = require('fs');

module.exports = {
  up: (queryInterface, Sequelize) => {
    let data = fs.readFileSync("./data/managers.json", "utf8")
    data = JSON.parse(data)

    data.forEach(e => {
      delete e.id
      e.createdAt = new Date()
      e.updatedAt = new Date()
    })

    return queryInterface.bulkInsert("Managers", data)
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Managers', null, {});
  }
};
