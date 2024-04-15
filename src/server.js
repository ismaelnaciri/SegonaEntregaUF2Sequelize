const express = require('express');
const app = express();
const cors = require('cors');
const moment = require("moment")
const Sequelize = require("sequelize");

app.use(cors());
app.use(express.json());

port = 3080;
app.listen(port, () => {
  console.log(`Server listening to port : ${port}`);
});

const {crearConfigBD} = require('./db.config.js');
const db = crearConfigBD();

const otherDB = new Sequelize("uniadriatregon", "isma", "IsmaElPro2002", {
  host: "127.0.0.1",
  port: 3308,
  dialect: "mysql",
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 1000,
  },
});

const {getCityModel} = require("./app/models/city.model");
const City = getCityModel(db);

const {getCountryModel} = require("./app/models/country.model");
const Country = getCountryModel(db);

var initModels = require("./app/models/modelsAuto/init-models");
var models = initModels(otherDB);

console.log("Models  |", models);

db.sync().then(() => {
  console.log('Drop and re-sync db.');
});

app.post("/api/ex3Post", async (req, res) => {
  await Country.create({country_id: 1, country: "Spain", last_update: moment().format("YYYY-MM-DD HH:mm:ss")});
  console.log("country created!!");
});

app.post("/api/altaEmpleat", async (req, res) => {
  if (req.body) {
    let empleat = req.body;
    if (empleat.empleat_num != null &&
      empleat.empleat_nom != null &&
      empleat.empleat_ofici != null &&
      empleat.empleat_dir != null &&
      empleat.empleat_datalt != null &&
      empleat.empleat_salari != null &&
      empleat.empleat_comissio != null &&
      empleat.empleat_dept_num != null
    ) {
      try {
        // Create the entry using the Empleat model
        const newEmpleat = await models.empleat.create({
          empleat_num: empleat.empleat_num,
          empleat_nom: empleat.empleat_nom,
          empleat_ofici: empleat.empleat_ofici,
          empleat_dir: empleat.empleat_dir,
          empleat_datalt: empleat.empleat_datalt,
          empleat_salari: empleat.empleat_salari,
          empleat_comissio: empleat.empleat_comissio,
          empleat_dept_num: empleat.empleat_dept_num, // corrected the property name
        });

        res.status(200).send({
          message: "Entry created successfully",
          data: newEmpleat,
        });
      } catch (error) {
        console.error("Error creating Empleat entry:", error);
        res.status(500).send({
          message: "Error creating Empleat entry",
          error: error.message,
        });
      }
    } else {
      res.status(400).send({
        message: "Invalid data provided for Empleat entry",
      });
    }
  } else {
    res.status(400).send({
      message: "No data provided",
    });
  }
});

app.get("/api/llistaDoctors", async (req, res) => {
  
});
