const pointController = require("../controllers/pointController");
const router = require("express").Router();
//middlewares
module.exports = () => {
  router.post("/point", pointController.addPoint)
  router.get("/space", pointController.getPoints)
  router.delete("/space", pointController.deletePoints)
  router.get("/lines/:offset", pointController.getLines)
  return router;
};