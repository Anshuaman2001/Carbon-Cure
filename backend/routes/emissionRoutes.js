const express = require('express');
const { getEmissions, addEmission } = require('../controllers/emissionController');

const router = express.Router();

// Route for getting all emissions
router.get('/', getEmissions);

// Route for adding a new emission
router.post('/', addEmission);

module.exports = router;
