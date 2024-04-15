const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('empleat', {
    empleat_num: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    empleat_nom: {
      type: DataTypes.STRING(16),
      allowNull: true
    },
    empleat_ofici: {
      type: DataTypes.STRING(10),
      allowNull: true
    },
      empleat_dir: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    empleat_datalt: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    empleat_salari: {
      type: DataTypes.DECIMAL(11,2),
      allowNull: true
    },
    empleat_comissio: {
      type: DataTypes.DECIMAL(11,2),
      allowNull: true
    },
    empleat_dept_num: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'dept',
        key: 'dept_num'
      }
    }
  }, {
    sequelize,
    tableName: 'empleat',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "empleat_num" },
        ]
      },
      {
        name: "fk_empleat_dept_num",
        using: "BTREE",
        fields: [
          { name: "empleat_dept_num" },
        ]
      },
    ]
  });
};
