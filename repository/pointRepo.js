const sequelize = require("sequelize");
const models = require("../models");
const Point = models.point;

module.exports = {
  getPoints: async () => await Point.findAll(),
  addPoint: async (x, y) => {
    let found = await Point.findOne({ where: { x, y } })
    if(!found)
        return Point.create({x, y});
    else
        return {};
  },
  deletePoints: async () => await Point.truncate()
};
