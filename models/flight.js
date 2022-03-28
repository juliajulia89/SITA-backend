const mongoose = require("mongoose")
const { Schema, model } = mongoose;

const flightSchema = new Schema({
  commentId: { type: Number, required: true },
  comment: [{ type: Schema.Types.ObjectId, ref: "Comment", required: true }],
  date: { type: Date, required: true, default: Date.now },
  userId: { type: Number, required: true },
  flightId: { type: Number, required: true },
  tags: { type: Array },
});

module.exports = mongoose.model("Flight", flightSchema)
