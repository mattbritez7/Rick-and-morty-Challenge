const express =require('express');
const charCounter=require("../controllers/charCounter/charCounter.js");
const microprofiler = require('microprofiler');

const router = express.Router();

router.get("/", async (req, res) => {
    var start = microprofiler.start();
    let data = await charCounter();
    var elapsedUs = microprofiler.measureFrom(start);
   
  res.send([{
    exercise_name: "Char counter",
    time: elapsedUs,
    in_time: elapsedUs > 3000000 ? false : true,
    results: data,
  }]);
});

module.exports = router
