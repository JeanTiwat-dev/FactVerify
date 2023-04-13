const express = require("express");
require("dotenv").config(); //ใข้งาน .env
const app = express();
const cors = require("cors");

app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//middleware
const logger = require("./middleware/logger");
app.use(logger);

app.get("/welcome", (req, res) => {
  console.log(req.body);
  res.status(200).send("Welcome 🙌 ");
});

const port = `${process.env.PORT}`;
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
