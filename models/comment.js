const mongoose = require("mongoose")
const { Schema, model } = mongoose;

const commentSchema = new Schema ({
comment: { type: String, required: true}, 
userId: { type: Number, required: true },
flightId: [{ type: Schema.Types.ObjectId, ref: "Flight", required: true  }],
tags: { type: Array },
});

module.exports = model("Comment", commentSchema)
