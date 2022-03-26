require("dotenv/config");
require("./db");

const express = require("express");
const router = require("express").Router();

const app = express();
require("./config")(app);

const indexRouter = require("./routes/index");
app.use("/", indexRouter);

const commentsRouter = require("./routes/comments.routes")
app.use("/comments", commentsRouter);


const flightsRouter = require ("./routes/flights.routes")
app.use("/flights", flightsRouter);


require("./error-handling")(app);

module.exports = app;
