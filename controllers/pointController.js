const pointRepo = require("../repository/pointRepo");

module.exports = {
    addPoint: async (req, res) => {
        let addedPoint = await pointRepo.addPoint(req.body.x, req.body.y);
        res.status(200).json({ message: "SUCCESS" , addedPoint});
    },
    getPoints: async (req, res) => {
        let points = await pointRepo.getPoints();
        res.status(200).json({ message: "SUCCESS", points });
    },
    deletePoints: async (req, res) => {
        let points = await pointRepo.deletePoints().then(res => console.log(res)).catch(e => console.log(e));
        res.status(200).json({ message: "SUCCESS", points });
    }
}