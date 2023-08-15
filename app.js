/**
 * npx sequelize-cli model:generate --name Manager --attributes fullName:string,phone:string,email:string
 * 
 * npx sequelize-cli model:generate --name Band --attributes name:string,debutYear:integer,domisili:string
 * 
 * npx sequelize-cli migration:generate --name add-column-BandId-to-Managers
 * 
 * npx sequelize-cli model:generate --name Song --attributes name:string,duration:integer,genre:string,BandId:integer
 */


const express = require('express')
const routes = require('./routes/index.js');

const app = express()
const port = 3000

app.set('view engine', 'ejs');

app.use(express.urlencoded({ extended: true }))

app.use("/", routes)

app.listen(port, () => {
  console.log(`Example app listening on http://localhost:${port}`)
})