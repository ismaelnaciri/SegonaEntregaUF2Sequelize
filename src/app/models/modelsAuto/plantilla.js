const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('plantilla', {
    plantilla_hospital_codi: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'sala',
        key: 'sala_hospital_codi'
      }
    },
    plantilla_sala_codi: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'sala',
        key: 'sala_codi'
      }
    },
    plantilla_empleat_num: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    plantilla_nom: {
      type: DataTypes.STRING(16),
      allowNull: true
    },
    plantilla_funcio: {
      type: DataTypes.STRING(10),
      allowNull: true
    },
    plantilla_torn: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    plantilla_salari: {
      type: DataTypes.DECIMAL(11,2),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'plantilla',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "plantilla_empleat_num" },
        ]
      },
      {
        name: "fk_plantilla_hospital_codi",
        using: "BTREE",
        fields: [
          { name: "plantilla_hospital_codi" },
        ]
      },
      {
        name: "fk_plantilla_sala_codi",
        using: "BTREE",
        fields: [
          { name: "plantilla_sala_codi" },
          { name: "plantilla_hospital_codi" },
        ]
      },
    ]
  });
};
