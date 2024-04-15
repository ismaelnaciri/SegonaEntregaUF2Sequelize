const DataTypes = require("sequelize");

const getCountryModel = (db) => {
  return db.define("country", {
    country_id: {
      type: DataTypes.SMALLINT,
      allowNull: false,
      primaryKey: true,
    },
    country: {
      type: DataTypes.STRING(50),
      allowNull: false,
    },
    last_update: {
      type: DataTypes.DATE,
      allowNull: false,
    }
  }, {
    timestamps: false,
  });
}

module.exports = {getCountryModel};
