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
    });
  });

  app.get("/api/workouts/range", (req, res) => {
    db.Workout.find({})
      .then(dbWorkout => {
        res.json(dbWorkout);
        console.log(3);
      })
      .catch(err => {
        res.json(err);
        console.log(4);
      });
  });


  app.post("/api/workouts/", (req, res) => {
    console.log("createWorkout", req.body);
    db.Workout.create(req.body)
    .then(dbWorkout => {
      res.json(dbWorkout);
      console.log(5, dbWorkout);
    })
    .catch(err => {
      res.json(err);
      console.log(6);
    });
  });


  app.put("/api/workouts/:id", (req, res) => {
    db.Workout.updateOne(
      { _id: req.params.id },
      { $push: { exercises: req.body } }
    )
      .then(dbWorkout => {
        res.json(dbWorkout);
        console.log(7);
      })
      .catch(err => {
        res.json(err);
        console.log(8);
      });
  });
}