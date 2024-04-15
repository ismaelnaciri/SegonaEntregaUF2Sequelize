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
  try {
    const doctors = await models.doctor.findAll();

    if (doctors.length > 0) {
      res.status(200).send({
        code: 200,
        message: "Everything went well :)",
        data: doctors,
      });
    } else {
      res.status(404).send({
        code: 404,
        message: "No data found :(",
      })
    }
  } catch (error) {
    res.status(500).send({
      code: 500,
      message: "Error: "+ error.message,
    })
    console.log(`Error getting doctors :( | ${error}`)
  }
});


app.get("/api/amountOfEmpleats", async (req, res) => {
  console.log(`params: ${req.query}`);
  if (req.query.deptId) {
    try {
      const amountOfEmpleat = await models.empleat.count({
        where: {
          empleat_dept_num: req.query.deptId,
        }
      });

      console.log("amount of Empleat", amountOfEmpleat);
      if (amountOfEmpleat != null) {
        res.status(200).send({
          code: 200,
          message: "correctly gotten amount of empleats",
          data: amountOfEmpleat,
        })
      } else {
        res.status(404).send({
          code: 404,
          message: "No data found :(",
        })
      }
    } catch (error) {
      res.status(500).send({
        code: 500,
        message: error
      })
    }
  }

});


app.put("/api/updateDoctorWithId", async (req, res) => {
  if (req.body && req.query) {
    console.log(req.body);
    try {
      const updatedDoctor = await models.doctor.update({
        doctor_nom: req.body.doctor_name,
        doctor_especialitat: req.body.doctor_especialitat,
      }, {
        where: {
          doctor_hospital_codi: req.query.doctor_hospital_codi,
          doctor_especialitat: req.query.doctor_especialitat,
        }
      });

      if (updatedDoctor != null) {
        res.status(200).send({
          code: 200,
          message: "updated doctor",
          data: updatedDoctor
        });
      } else {
        res.status(404).send({
          code: 404,
          message: "doctor not found",
        });

        console.log("doctor not found");
      }

    } catch (error) {
      res.status(500).send({
        code: 500,
        message: error
      });

      console.log(`ERROR: ${error}`)
    }
  }
});


app.delete("/api/deleteEmpleatWithId", async (req, res) => {
  if (req.query) {
    try {
      const deleteEmployee = models.empleat.destroy({
        where: {
          empleat_num: req.query.empleat_num,
        }
      });

      if (deleteEmployee != null) {
        res.status(200).send({
          code: 200,
          message: "deleted employee",
          data: deleteEmployee
        })
      }
    } catch (error) {
      console.log(error);
      res.status(500).send({
        code: 500,
        message: error
      })
    }
  }
});


app.get("/api/getHospitalSalesAndLlits", async (req, res) => {
  try {
    models.hospital.hasMany(models.sala, { foreignKey: 'sala_hospital_codi', sourceKey: 'hospital_codi' });
    models.sala.belongsTo(models.hospital, { foreignKey: 'sala_hospital_codi', targetKey: 'hospital_codi' });

    const hospitalsWithSales = await models.hospital.findAll({
      include: [{
        model: models.sala,
        attributes: ['sala_nllits'],
      }],
      attributes: ['hospital_nom'],
    });

    const result = hospitalsWithSales.map(hospital => {
      const totalBeds = hospital.salas.reduce((total, sala) => total + sala.sala_nllits, 0);
      return {
        hospital: hospital.hospital_nom,
        totalRooms: hospital.salas.length,
        totalBeds
      };
    });
    res.status(200).send({
      code: 200,
      message: "sussy?",
      data: result
    })

  } catch (error) {
    console.log(error);
    res.status(500).send({
      code: 500,
      message: `Error getting hospital wards | ${error}`,
    })
  }
});
