const axios = require("axios");

const { launch: launchesDB } = require("./launches.mongo");
const planets = require("./planets.mongo");

let DEFAULT_FLIGHT_NUMBER = 100;

const SPACEX_API_URL = "https://api.spacexdata.com/v4/launches/query";

async function populateLaunches() {
	console.log("Downloading launch data...");

	const response = await axios.post(SPACEX_API_URL, {
		query: {},
		options: {
			pagination: false,
			populate: [
				{
					path: "rocket",
					select: {
						name: 1,
					},
				},
				{
					path: "payloads",
					select: {
						customers: 1,
					},
				},
			],
		},
	});

	if (response.status !== 200) {
		console.log("Problem downloading launch");
		throw new Error("Error downloading launch");
	}

	const launchDocs = response.data.docs;

	for (const launchDoc of launchDocs) {
		const payloads = launchDoc["payloads"];
		const customers = payloads.flatMap((payload) => {
			return payload["customers"];
		});

		const launch = {
			flightNumber: launchDoc["flight_number"],
			mission: launchDoc["name"],
			rocket: launchDoc["rocket"]["name"],
			launchDate: launchDoc["date_local"],
			upcoming: launchDoc["upcoming"],
			success: launchDoc["success"],
			destination: "N/A",
			customers,
		};

		await savelaunch(launch);
	}
}

async function loadLaunchData() {
	// const firstLaunch = await findLaunch({
	// 	flightNumber: 1,
	// 	rocket: "Falcon 1",
	// 	mission: "FalconSat",
	// });

	await populateLaunches();
}

async function findLaunch(filter) {
	return await launchesDB.findOne(filter);
}

async function findLaunchById(launchId) {
	return await findLaunch({ flightNumber: launchId });
}

async function getLatestFlightNumber() {
	const latestlaunch = await launchesDB.findOne().sort("-flightNumber");

	return latestlaunch ? latestlaunch.flightNumber : DEFAULT_FLIGHT_NUMBER;
}

async function getAllLaunches(skip, limit) {
	return await launchesDB
		.find({}, { _id: 0, __v: 0 })
		.sort({ launchDate: -1 })
		.skip(skip)
		.limit(limit);
}

async function savelaunch(launch) {
	await launchesDB.findOneAndUpdate(
		{
			flightNumber: launch.flightNumber,
		},
		launch,
		{
			upsert: true,
		}
	);
}

async function isValidPlanet(planetName) {
	const isValid = await planets.findOne({ keplerName: planetName });
	return isValid ? true : false;
}

async function scheduleNewLaunch(launch) {
	const validProcess = await isValidPlanet(launch.target);
	if (!validProcess) throw new Error("No matching planet found");

	const latestFlightNumber = await getLatestFlightNumber();
	const newFlightNumber = latestFlightNumber + 1;

	const newlaunch = Object.assign(launch, {
		success: true,
		upcoming: true,
		customers: ["MonkeyClouds, Nasa, ULA"],
		flightNumber: newFlightNumber,
	});

	await savelaunch(newlaunch);
}

async function abortLaunchById(launchId) {
	const aborted = await launchesDB.findOneAndUpdate(
		{
			flightNumber: launchId,
		},
		{
			upcoming: false,
			success: false,
		}
	);

	console.log(!!aborted);

	return !!aborted;
}

module.exports = {
	loadLaunchData,
	getAllLaunches,
	scheduleNewLaunch,
	findLaunchById,
	abortLaunchById,
};
