const express = require('express');

const v1 = express();

const planetsRouter = require("./planets/planets.route");
const launchesRouter = require("./launches/launches.route");

v1.use("/planets", planetsRouter);
v1.use("/launches", launchesRouter);

module.exports = v1; 