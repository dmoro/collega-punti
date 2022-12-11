require("dotenv").config("../.env");
//Test is supposed to be for local database
//Development will be used for a hosted database

module.exports = {
  local: {
    username: process.env.DB_USER_LOCAL,
    password: process.env.DB_PASS_LOCAL,
    database: process.env.DB_NAME_LOCAL,
    host: process.env.DB_HOST_LOCAL,
    dialect: process.env.DIALECT,
    dialectOptions: {
      bigNumberStrings: true,
    },
  }
};
