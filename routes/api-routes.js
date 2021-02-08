const db = require("../models");

module.exports = function(app) {
  app.get("/api/workouts", (req, res) => {
    db.Workout.find({})
    .then(dbWorkout => {
      res.json(dbWorkout);
      console.log(1);
    })
    .catch(err => {
      res.json(err);
      console.log(2);
    })
  })
}