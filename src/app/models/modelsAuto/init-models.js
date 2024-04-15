var DataTypes = require("sequelize").DataTypes;
var _dept = require("./dept");
var _doctor = require("./doctor");
var _empleat = require("./empleat");
var _hospital = require("./hospital");
var _malalt = require("./malalt");
var _plantilla = require("./plantilla");
var _sala = require("./sala");

function initModels(sequelize) {
  var dept = _dept(sequelize, DataTypes);
  var doctor = _doctor(sequelize, DataTypes);
  var empleat = _empleat(sequelize, DataTypes);
  var hospital = _hospital(sequelize, DataTypes);
  var malalt = _malalt(sequelize, DataTypes);
  var plantilla = _plantilla(sequelize, DataTypes);
  var sala = _sala(sequelize, DataTypes);

  empleat.belongsTo(dept, { as: "empleat_dept_num_dept", foreignKey: "empleat_dept_num"});
  dept.hasMany(empleat, { as: "empleats", foreignKey: "empleat_dept_num"});
  doctor.belongsTo(hospital, { as: "doctor_hospital_codi_hospital", foreignKey: "doctor_hospital_codi"});
  hospital.hasMany(doctor, { as: "doctors", foreignKey: "doctor_hospital_codi"});
  sala.belongsTo(hospital, { as: "sala_hospital_codi_hospital", foreignKey: "sala_hospital_codi"});
  hospital.hasMany(sala, { as: "salas", foreignKey: "sala_hospital_codi"});
  plantilla.belongsTo(sala, { as: "plantilla_hospital_codi_sala", foreignKey: "plantilla_hospital_codi"});
  sala.hasMany(plantilla, { as: "plantillas", foreignKey: "plantilla_hospital_codi"});
  plantilla.belongsTo(sala, { as: "plantilla_sala_codi_sala", foreignKey: "plantilla_sala_codi"});
  sala.hasMany(plantilla, { as: "plantilla_sala_codi_plantillas", foreignKey: "plantilla_sala_codi"});

  return {
    dept,
    doctor,
    empleat,
    hospital,
    malalt,
    plantilla,
    sala,
  };
}
module.exports = initModels;
module.exports.initModels = initModels;
module.exports.default = initModels;
