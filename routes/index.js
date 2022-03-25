const express = require("express");
const router = require("express").Router();
module.exports = router;


router.get("/", (req, res, next) => {
  res.json("good to go");
});

module.exports = router;
