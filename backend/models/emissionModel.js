const mongoose = require('mongoose');

const emissionSchema = new mongoose.Schema({
  date: {
    type: Date,
    required: true,
  },
  value: {
    type: Number,
    required: true,
  },
});

const Emission = mongoose.model('Emission', emissionSchema);

module.exports = Emission;
