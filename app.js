require("dotenv/config");
require("./db");

const express = require("express");

const app = express();
require("./config")(app);

const indexRouter = require("./routes/index");
app.use("/", indexRouter);
const commentsRouter = require("./routes/comments")
app.use("/comments", commentsRouter);
const flightsRouter = require ("./routes/flights")
app.use("/flights", flightsRouter);


require("./error-handling")(app);

module.exports = app;
