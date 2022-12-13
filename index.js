process.env.TZ = "Europe/Berlin";
const express = require('express')
const app = express()
const cors = require("cors");;
const dotenv = require("dotenv");
dotenv.config();
const routes = require("./routes/routes")();
app.use(cors());
const bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use("/", routes);
// parse application/json
app.listen(process.env.PORT, async () => {
    console.log(`Server's Running on Port: ${process.env.PORT}`);
});