/*
|--------------------------------------------------------------------------
| api.js -- server routes
|--------------------------------------------------------------------------
|
| This file defines the routes for your server.
|
*/
const Danger = require("./models/Danger");
const express = require("express");

// import models so we can interact with the database
// const User = require("./models/user");

// api endpoints: all these paths will be prefixed with "/api/"
const router = express.Router();

//initialize socket
const socketManager = require("./server-socket");

router.post("/danger", (req, res) => {
  console.log(req.body)

  const newDanger = new Danger({
    locationX: req.body.location.x,
    locationY: req.body.location.y,
    radius:req.body.radius,
  });

  newDanger.save().then((danger) => res.send(danger));
});

router.get("/dangerGets", (req, res) => {

  Danger.find(function(err, apis) {

      if (err) return console.error(err);

      res.send(apis);

  });

});


// |------------------------------|
// | write your API methods below!|
// |------------------------------|

// anything else falls to this "not found" case
router.all("*", (req, res) => {
  console.log(`API route not found: ${req.method} ${req.url}`);
  res.status(404).send({ msg: "API route not found" });
});

module.exports = router;
