// Importing Dependencies
const express = require("express");
const cors = require('cors');
const bodyParser = require("body-parser");
const mongoose = require("mongoose");

const config = require("./config");

// Setting up Express Sever
const app = express();
app.use(cors());
app.use(
  bodyParser.urlencoded({
    extended: false,
  })
);
app.use(express.json());

//Routes
app.use("/", require("./routes/index"));

// Connecting to Database and starting the server
if (config.dbUrl) {
  mongoose
    .connect(config.dbUrl, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then(() => {
      console.log("Database connected.");
      server = app.listen(config.port, () => {
        console.log(`Listening at port ${config.port}.`);
      });
    })
    .catch((err) => {
      console.log(`Error while connecting to database\n${err}`);
    });
} else {
  console.log("Empty Database URL.");
}
