const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('hospital', {
    hospital_codi: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    hospital_nom: {
      type: DataTypes.STRING(12),
      allowNull: true
    },
    hospital_adreca: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    hospital_telefon: {
      type: DataTypes.STRING(8),
      allowNull: true
    },
    hospital_nllits: {
      type: DataTypes.INTEGER,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'hospital',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "hospital_codi" },
        ]
      },
    ]
  });
};
