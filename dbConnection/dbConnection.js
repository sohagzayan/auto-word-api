const mongoose = require("mongoose");
require("dotenv").config();

mongoose
  .connect(process.env.MONGO_URL)
  .then(() => {
    console.log("Mongodb Connection Success".bold.blue);
  })
  .catch((err) => {
    console.log(err);
    console.log("Mongodb Connection Fail".bold.red);
  });
