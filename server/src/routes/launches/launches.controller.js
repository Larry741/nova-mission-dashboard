const {
	getAllLaunches,
	scheduleNewLaunch,
	findLaunchById,
	abortLaunchById,
} = require("../../models/launches.model");

const { getPagination } = require("../../services/query");

async function httpGetAllLaunches(req, res) {
	const { skip, limit } = getPagination(req.query);
	const launches = await getAllLaunches(skip, limit);
	return res.status(200).json(launches);
}

async function httpAddNewLaunch(req, res) {
	const launchData = req.body;
	const { mission, rocket, launchDate, target: destination } = launchData;

	if (!mission || !rocket || !launchDate || !destination) {
		return res.status(400).json({
			error: "Missing required launch data",
		});
	}

	launchData.launchDate = new Date(launchData.launchDate);

	if (isNaN(launchData.launchDate)) {
		return res.status(400).json({
			error: "Invalid launch date",
		});
	}

	await scheduleNewLaunch(launchData);
	console.log(launchData);

	return res.status(201).json(launchData);
}

async function httpAbortLaunch(req, res) {
	const launchId = +req.params.id;

	const launchExists = await findLaunchById(launchId);

	if (!launchExists) {
		return res.status(400).json({
			error: "Launch not found",
		});
	}

	const aborted = await abortLaunchById(launchId);

	if (!aborted) {
		return res.status(400).json({
			error: 'Launch not aborted'
		})
	}

	res.status(200).json({
		ok: true
	});
}

module.exports = {
	httpGetAllLaunches,
	httpAddNewLaunch,
	httpAbortLaunch,
};
