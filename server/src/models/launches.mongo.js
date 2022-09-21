const mongoose = require("mongoose");

const launchesSchema = mongoose.Schema({
	flightNumber: {
		type: Number,
		requires: true,
		min: 100,
	},
	launchDate: {
		type: Date,
		required: true,
	},
	mission: {
		type: String,
		required: true,
	},
	rocket: {
		type: String,
		required: true,
	},
	target: {
		type: String,
	},
	customers: [String],
	upcoming: {
		type: Boolean,
		required: true,
	},
	success: {
		type: Boolean,
		required: true,
		default: true,
	},
});

module.exports = { launch: mongoose.model("Launch", launchesSchema) };
