const mongoose = require("mongoose")

const commentSchema = new mongoose.Shema ({
comment: { type: String, required: true} 
userId: { type: Number, required: true },
flightId: { type: Schema.Types.ObjectId, ref: "Flight", required: true  }
tags: { type: Array },
});

module.exports = mongoose.model("Comment", commentSchema)