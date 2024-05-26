const db = require("./connection/index");
const express = require("express");
const app = express();
const cors = require("cors");
const body_parser = require("body-parser");
const Base = require("./helper/baseController");

app.use(
  body_parser.urlencoded({
    extended: true,
  })
);

app.use(express.json());
app.use(cors());

db.sequelize.sync({ force: false, alter: true });

app.use("/", require("./routes/index"));

app.use("*", (req, res) => {
  return res.send(Base.sendError("Not Found", 404));
});

const PORT = 3000;

app.listen(PORT, () => {
  console.log("server is running on " + `http://127.0.0.1:${PORT}`);
});
