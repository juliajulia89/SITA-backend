
const Comment = require("../models/comment");
const Flight = require("../models/flight");
const express = require("express");
const router = require("express").Router();
const mongoose = require("mongoose");

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
router.get("/flights/:id", getFlight, (req, res) => {
res.json(res.flight)
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