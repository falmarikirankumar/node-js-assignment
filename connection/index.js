const { Sequelize, DataTypes } = require("sequelize");
const config = require("../config/config.json").development;

const sequelize = new Sequelize(
  config.database,
  config.username,
  config.password,
  {
    host: config.host,
    dialect: config.dialect,
    logging: false,
  }
);

sequelize
  .authenticate()
  .then(() => {
    console.log("Connection has been established successfully.");
  })
  .catch((err) => {
    if (err.message.includes("timeout")) {
      console.error("Database connection timeout");
    } else {
      console.error("Sequelize error:", err);
    }
  });

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

// Form
db.Form = require("../models/Form")(sequelize, DataTypes);
db.FormData = require("../models/FormData")(sequelize, DataTypes);

db.Form.hasMany(db.FormData, { foreignKey: "formId" });
db.FormData.belongsTo(db.Form, { foreignKey: "formId" });

module.exports = db;
