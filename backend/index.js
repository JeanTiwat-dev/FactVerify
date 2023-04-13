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


function randomInt1_100() {
  return Math.floor(Math.random() * 100) + 1;
}

app.post("/sendForm", async(req, res) => {
  console.log(req.body);

  const data_result = {
    consistency: randomInt1_100(),
    adaptation:randomInt1_100(),
    ambiguity:randomInt1_100(),
    false_information:randomInt1_100(),
    message:"it's reliable"
  }

  console.log(data_result);

  res.status(200).json({result:{data_result}});
});

const port = `${process.env.PORT}`;
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
