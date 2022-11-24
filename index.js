const express = require("express");
const app = express();
const dotenv = require("dotenv");
const colors = require("colors");
const PORT = process.env.PORT || 5000;

const productRoute = require("./Routes/products.route");

dotenv.config();
app.use(express.json());

/* Routes */
app.use("/api/", productRoute);

/* db connection */
require("./dbConnection/dbConnection");

/* Health Check */
app.get("/", (req, res) => {
  res.send("hello world");
});

app.listen(PORT, () => {
  console.log(`Server is running on PORT: ${PORT}`.bold.red);
});
