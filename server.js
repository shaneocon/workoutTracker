const express = require("express");
const logger = require("morgan");
const mongoose = require("mongoose");


const PORT = process.envPORT || 8080;

const app = express();
app.use(logger("dev"));

mongoose.connect(process.env.MONGODB_URI ||
  "mongodb://localhost/workout", { useNewUrlParser: true, useUnifiedTopology: true });

mongoose.connection.on("connected", () => {
  console.log("Mongoose is connected");
});

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static("public"));

require("./routes/api-routes.js")(app);
require("./routes/html-routes.js")(app);

app.listen(PORT, () => {
  console.log(`App running on port ${PORT}!`);
});