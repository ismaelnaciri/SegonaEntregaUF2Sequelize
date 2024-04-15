const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('sala', {
    sala_codi: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    sala_hospital_codi: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'hospital',
        key: 'hospital_codi'
      }
    },
    sala_nom: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    sala_nllits: {
      type: DataTypes.INTEGER,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'sala',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "sala_codi" },
          { name: "sala_hospital_codi" },
        ]
      },
      {
        name: "fk_sala_hospital_codi",
        using: "BTREE",
        fields: [
          { name: "sala_hospital_codi" },
        ]
      },
    ]
  });
};
