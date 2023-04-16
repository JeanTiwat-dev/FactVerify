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
  let ans = Math.floor(Math.random() * 100) + 1;
  while (ans < 30) {
    ans = Math.floor(Math.random() * 100) + 1;
  }
  return ans;
}

app.post("/sendForm", async (req, res) => {
  console.log(req.body);

  let consistency = randomInt1_100();
  let adaptation = randomInt1_100();
  let ambiguity = randomInt1_100();
  let false_information = randomInt1_100();
  let massage;

  if (consistency >= 50 && adaptation >= 50 && ambiguity >= 50 && false_information >= 50) {
    massage = "It's reliable";
  } else {
    massage = "It's unreliable";
  }

  const data_result = {
    consistency: consistency,
    adaptation: adaptation,
    ambiguity: ambiguity,
    false_information: false_information,
    message: massage
  }

  console.log(data_result);

  res.status(200).json({ result: { data_result } });
});

const port = `${process.env.PORT}`;
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
