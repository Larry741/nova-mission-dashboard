const mongoose = require('mongoose');


const planetSchema = mongoose.Schema({
  kepler_name: {
    type: String,
    required: true
  }
});

module.exports = mongoose.model('planet', planetSchema);