const mongoose = require('mongoose');
const Car = mongoose.Schema({
  driver_name: {
    type: String,
    required: true
  },
  license_plate: {
    type: String,
    required: true
  },
  status: {
    type: String,
    required: true,
    default: "IN"
  },
  date: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model("Car", Car);