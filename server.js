const express = require("express");
const bodyParser = require("body-parser");
const path = require("path")
const mongoose = require("mongoose");

const PORT = process.envPORT || 8080;

const db = require("./models");

const app = express();


app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static("public"));

require("./routes/api-routes.js")(app);
require("./routes/html-routes.js")(app);

mongoose.connect(process.env.MONGODB_URI || 
  "mongodb://localhost/nosql", { useNewUrlParser: true, useUnifiedTopology: true});

app.listen(PORT, () => {
  console.log(`App running on port ${PORT}!`);
});