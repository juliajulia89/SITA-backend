const mongoose = require("mongoose")
const { Schema, model } = mongoose;

const flightSchema = new Schema({
  commentId: { type: Number, required: true },
  comment: { type: String, required: true },
  date: { type: Date, required: true, default: Date.now },
  userId: { type: Number, required: true },
  flightId: { type: Number, required: true },
  tags: { type: Array },
});

module.exports = model("Flight", flightSchema)
