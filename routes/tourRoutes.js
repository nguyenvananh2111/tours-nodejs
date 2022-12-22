const express = require('express');
const tourController = require('../controllers/tourController');

const router = express.Router();

router
  .route('/top-5-cheap')
  .get(tourController.aliasTopTours, tourController.getAllTours);

module.exports = router;
