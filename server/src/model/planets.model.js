const fs = require("fs");
const path = require("path");

const planets = require('./planets.mongo');
const { parse } = require("csv-parse");

// const planets = [];

const isHabitable = (planet) => {
  return (
    planet["koi_disposition"] === "CONFIRMED" &&
    planet["koi_insol"] > 0.36 &&
    planet["koi_insol"] < 1.11 &&
    planet["koi_prad"] < 1.6
  );
};

async function readPlanetsData() {
  return new Promise((resolve, reject) => {
    fs.createReadStream(path.join(__dirname, "..", '..', 'data', "kepler_data.csv"))
      .pipe(
        parse({
          columns: true,
          comment: "#",
        })
      )
      .on("data", async (data) => {
        if (isHabitable(data)) {
          await  savePlanet(data);
        }
      })
      .on("error", (err) => {
        console.log(err);
        reject(err);
      })
      .on('end', async () => {
        await getPlanets();
        resolve();
      })
  }) 
}

async function savePlanet(planet) {
  try {
    await planets.updateOne({
      kepler_name: planet.kepler_name,
    }, {
      kepler_name: planet.kepler_name,
    }, {
      upsert: true,
    }
    );
  } catch (err) {
    console.log(`could not save planet ${err}`)
  }
}

async function getPlanets() {
  //connect to database
  return await planets.find({}, {
    '__id': 0, '__v': 0
  });
}

module.exports = {
  readPlanetsData,
  getPlanets
}