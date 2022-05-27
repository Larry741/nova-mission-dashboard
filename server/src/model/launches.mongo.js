const mongoose = require('mongoose');

const launchesSchema = new mongoose.Schema({
  flightNumber: {
    type: Number,
    required: true,
    default: 100,
    min: 100,
    max: 999,
  },
  customers: {
    type: [String],
    required: true
  },
  upcoming: {
    type: Boolean,
    required: true,
  },
  success: {
    type: Boolean,
    required: true,
    default: true
  },
  mission: {
    type: String,
    required: true,
  },
  rocketName: {
    type: String,
    required: true,
  },
  launchDate: {
    type: Date,
    required: true,
  },
  target: {
    type: String,
    // required: true,
  },
});

module.exports = mongoose.model('launch', launchesSchema);