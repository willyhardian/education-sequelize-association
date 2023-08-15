'use strict';
const fs = require('fs');

module.exports = {
  up: (queryInterface, Sequelize) => {
    let data = fs.readFileSync("./data/songs.json", "utf8")
    data = JSON.parse(data)

    data.forEach(e => {
      delete e.id
      e.createdAt = new Date()
      e.updatedAt = new Date()
    })

    return queryInterface.bulkInsert("Songs", data)
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Songs', null, {});
  }
};
