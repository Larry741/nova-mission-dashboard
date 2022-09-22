const {
  postNewLaunch,
  launchWithIdExists,
  getAllLaunches,
  abortLaunch,
} = require("../../model/launches.model");

const { getPagination } = require('../../services/query') 

async function httpGetAllLaunches(req, res) {
  const { skip, limit } = getPagination(req.query);  
  const launches = await getAllLaunches(skip, limit);
  res.status(200).json(launches);
}

async function httpPostNewLaunch(req, res) {
  const launch = req.body;
  if (!launch.mission || !launch.rocket || !launch.launchDate || !launch.target) {
    return res.status(400).json({
      error: "missing required launch property"
    });
  }

  launch.launchDate = new Date(launch.launchDate);
  
  if (isNaN(launch.launchDate)) {
    return res.status(400).json({
      error: "Invalid launch Date",
    });
  }
  
  await postNewLaunch(launch);
  return res.status(201).json(launch);
}

async function httpAbortLaunch(req, res) {
  const launchId = +req.params.id;

  if (await launchWithIdExists(launchId)) {
    const abortedLaunch = await abortLaunch(launchId);

    if (!abortedLaunch) {
      return res.status(404).json({ error: 'launch not aborted' });
    }
    return res.status(202).json({ message: "launch aborted" });
  } else {
    return res.status(404).json({ error: "Launch not found" });
  }
}

module.exports = {
  httpGetAllLaunches,
  httpPostNewLaunch,
  httpAbortLaunch,
};