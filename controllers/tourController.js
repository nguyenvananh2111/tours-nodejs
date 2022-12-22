const factory = require('./handlerFactory');

const Tour = require('../models/tourModel');

exports.aliasTopTours = (req, res, next) => {
  // req.query.limit = '5';
  // req.query.sort = '-ratingsAverage,price';
  // req.query.fields = 'name,price,ratingsAverage,summary,difficulty';
  next();
};

exports.getAllTours = factory.getAll(Tour);
