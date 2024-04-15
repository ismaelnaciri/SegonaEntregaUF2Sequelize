const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('malalt', {
    malalt_num: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    malalt_nom: {
      type: DataTypes.STRING(12),
      allowNull: true
    },
    malalt_adreca: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    malalt_dnaixa: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    malalt_sexe: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    malalt_nss: {
      type: DataTypes.INTEGER,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'malalt',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "malalt_num" },
        ]
      },
    ]
  });
};
