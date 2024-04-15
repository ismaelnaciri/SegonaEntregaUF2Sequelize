const { DataTypes } = require("sequelize");

const getCityModel = (db) => {
  return db.define("city", {
    city_id: {
      type: DataTypes.SMALLINT,
      allowNull: false,
      primaryKey: true
    },
    city: {
      type: DataTypes.STRING(50),
      allowNull: false,
    },
    country_id: {
      type: DataTypes.SMALLINT,
      allowNull: false,
    },
    last_update: {
      type: DataTypes.DATE,
      allowNull: false,
    }
  }, {
    timestamps: false
  });
}

module.exports = { getCityModel };
