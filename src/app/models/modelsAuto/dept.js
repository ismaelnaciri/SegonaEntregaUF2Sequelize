const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('dept', {
    dept_num: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    dept_nom: {
      type: DataTypes.STRING(14),
      allowNull: true
    },
    dept_loc: {
      type: DataTypes.STRING(13),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'dept',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "dept_num" },
        ]
      },
    ]
  });
};
