const express = require("express");
const seed = require("./seeders/seed");

const PORT = process.envPORT || 8080;

const app = express();


app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static("public"));

require("./routes/api-routes.js")(app);
require("./routes/html-routes.js")(app);

mongoose.connect(process.env.MONGODB_URI ||
  "mongodb://localhost/nosql", { useNewUrlParser: true, useUnifiedTopology: true });

app.listen(PORT, () => {
  console.log(`App running on port ${PORT}!`);
});