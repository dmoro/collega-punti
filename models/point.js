const { Sequelize, DataTypes } = require("sequelize");
module.exports = (sequelize) => {
  const Point = sequelize.define(
    "point",
    {
      x: {
        type: Sequelize.INTEGER,
        primaryKey: true,
      },
      y: {
        type: Sequelize.INTEGER,
        primaryKey: true,
      }
    },
    {
      timestamps: false,
      freezeTableName: true,
    }
  );
  return Point;
};
