const mongoose = require("mongoose");
require("dotenv/config");
const MONGODB = process.env.MONGODB_URI;
const Flight = require("../models/flight")


const seedFlights = async () => {
  mongoose
    .connect(MONGODB, {
      useUnifiedTopology: true,
      useNewUrlParser: true,
      useCreateIndex: true,
    })
    .then((db) => console.log("Connected to the database succesfully"))
    .catch((err) => console.log("Connection failed"));

  try {


  } catch (error) {
    console.log(error);
  }
  mongoose.disconnect();
};

seedFlights();
