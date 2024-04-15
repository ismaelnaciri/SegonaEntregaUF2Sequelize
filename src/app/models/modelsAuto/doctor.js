const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('doctor', {
    doctor_codi: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    doctor_hospital_codi: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'hospital',
        key: 'hospital_codi'
      }
    },
    doctor_nom: {
      type: DataTypes.STRING(16),
      allowNull: true
    },
    doctor_especialitat: {
      type: DataTypes.STRING(16),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'doctor',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "doctor_codi" },
        ]
      },
      {
        name: "fk_doctor_hospital_codi",
        using: "BTREE",
        fields: [
          { name: "doctor_hospital_codi" },
        ]
      },
    ]
  });
};
