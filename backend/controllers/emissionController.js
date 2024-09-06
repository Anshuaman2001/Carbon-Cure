const Emission = require('../models/emissionModel');

// @desc Get all emissions
// @route GET /api/emissions
// @access Public
const getEmissions = async (req, res) => {
  try {
    const emissions = await Emission.find({});
    res.json(emissions);
  } catch (error) {
    res.status(500).json({ message: 'Server Error' });
  }
};

// @desc Add a new emission
// @route POST /api/emissions
// @access Public
const addEmission = async (req, res) => {
  const { date, value } = req.body;

  try {
    const newEmission = new Emission({
      date,
      value,
    });

    const savedEmission = await newEmission.save();
    res.status(201).json(savedEmission);
  } catch (error) {
    res.status(400).json({ message: 'Invalid Data' });
  }
};

module.exports = { getEmissions, addEmission };
