const pointRepo = require("../repository/pointRepo");
const lines = require("../services/lines")
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
    },
    getLines: async (req, res) => {
        let offset = parseInt(req.params.offset);
        if (
            offset == undefined ||
            offset == null ||
            typeof offset !== "number" ||
            offset <= 1 ||
            offset != req.params.offset
        ) {
        return res
            .status(400)
            .json({ message: "FAIL", error: "WRONG_OFFSET_FORMAT" });
        }
        let points = await pointRepo.getPoints();
        let segments = lines.get(points, offset);
        res.status(200).json({ message: "SUCCESS", segments });
    }
}