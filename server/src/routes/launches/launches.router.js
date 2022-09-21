const express = require('express');

// const { addNewLaunch } = require("../../models/launches.model");
const { httpGetAllLaunches, httpAddNewLaunch, httpAbortLaunch } = require("./launches.controller");

const launchesRouter = express.Router();

launchesRouter.get('/', httpGetAllLaunches);
launchesRouter.post('/', httpAddNewLaunch);
launchesRouter.delete('/:id', httpAbortLaunch);

module.exports = launchesRouter;