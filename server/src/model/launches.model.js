const axios = require('axios');

const planets = require('./planets.mongo');
const launches = require('./launches.mongo');

const DEFAULT_FLIGHT_NUMBER = 100;
const SPACE_X_API_URL = "https://api.spacexdata.com/v4/launches/query";

async function postNewLaunch(launch) {
  const doesPlanetExist = await planetExists(launch.target);

  if (!doesPlanetExist) {
    console.log("planet not habitable");
    return;
  }

  const no = await getLatestLaunch();
  
  const launchObj = {
    ...launch,
    flightNumber: no,
    customers: ["Nasa", "Orion corp"],
    upcoming: true,
    success: true,
    launchDate: launch.launchDate,
  };

  await saveOneLaunch(launchObj);
}

async function loadLaunchesData() {
  const firstLaunch = await launches.findOne({
    flightNumber: 1,
    rocket: 'Falcon 1'
  })
  
  if (firstLaunch) {
    console.log('launches are already in the database');
    return;
  }

  try {
    const response = await axios.post(SPACE_X_API_URL, {
      query: {},
      options: {
        pagination: false,
        populate: [
          {
            path: 'rocket',
            select: {
              name: 1
            }
          },
          {
            path: 'payloads',
            select: {
              customers: 1
            } 
          }
        ]
      }
    });
  
    if (response.status != 200) {
      console.log('problem downloading launches data from space-x')
      throw new Error("launch data download failed");
    }

    response.data.docs.map(async (data) => {
      const payloads = data["payloads"];
      const customers = payloads.flatMap((payload) => {
        return payload["customers"];
      });

      const launchDoc = {
        // target: data,
        mission: data.name,
        rocketName: data.rocket.name,
        flightNumber: data["flight_number"],
        customers: customers,
        upcoming: data.upcoming,
        success: data.success,
        launchDate: data["date_local"],
      };

      await saveOneLaunch(launchDoc);
    })
  } catch(err) {
    console.log(err);
  }
};

async function getLatestLaunch() {
  const latestLaunch = await launches.findOne().sort("-flightNumber");

  if (!latestLaunch) {
    return DEFAULT_FLIGHT_NUMBER;
  }
  return latestLaunch.flightNumber + 1;
}

async function saveOneLaunch(launchData) {
  await launches.findOneAndUpdate({
    flightNumber: launchData.flightNumber
  }, launchData, {
    upsert: true
  });
}

const planetExists = async (planet) => {
  return await planets.findOne({
    kepler_name: planet,
  });
}

async function launchWithIdExists(launchId) {
  return await launches.findOne({
    flightNumber: launchId
  });
}

async function getAllLaunches(skip, limit) {
  return await launches
    .find({}, '-__v -__id')
    .sort({
      flightNumber: 1
    })
    .skip(skip)
    .limit(limit);
}

async function abortLaunch(launchId) {
  const aborted = await launches.updateOne({
    flightNumber: launchId
  }, {
    upcoming: false,
    success: false
  })

  return aborted.acknowledged;
}

module.exports = {
  postNewLaunch,
  loadLaunchesData,
  launchWithIdExists,
  getAllLaunches,
  abortLaunch,
};