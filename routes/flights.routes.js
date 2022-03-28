const Comment = require("../models/comment");
const Flight = require("../models/flight");
const express = require("express");
const router = require("express").Router();
const mongoose = require("mongoose");

/*
// ROUTE TO GET ALL FLIGHTS
router.get("/flights", async (req, res) => {
  try {
    const flights = await Flight.find();
    res.status(200).json(flights);
  } catch (err) {
    res.status(500).json({ message: err.mesaage });
  }
});

// ROUTE TO GET FLIGHT BY ID
router.get("/flights/:flightId", getFlight, (req, res) => {
res.json(res.flight)
const { flightId } = req.params;
if (!mongoose.Types.ObjectId.isValid(flightId)) {
  res.status(400).json({ message: "Specified id is not valid" });
  return;
}
})

async function getFlight(req, res, next){
    let flight
  try {
    flight = await Flight.findById(req.params.id);
    res.status(200).json(flight);
  } catch (err) {
    res.status(500).json({ message: err.mesaage });
  }
res.flight=flight
next()
};


module.exports = router;
*/

// ROUTE TO GET ALL FLIGHTS
router.get("/flights", (req, res, next) => {
  Flight.find()
    .then((allFlights) => res.json(allFlights))
    .catch((err) => res.json(err));
});

// ROUTE TO GET FLIGHT BY ID
router.get("/flights/:flightId", (req, res, next) => {
  const { flightId } = req.params;
  if (!mongoose.Types.ObjectId.isValid(flightId)) {
    res.status(400).json({ message: "Specified id is not valid" });
    return;
  }
  Flight.findById(flightId)
    .then((flight) => res.status(200).json(flight))
    .catch((error) => res.json(error));
});

module.exports = router;
