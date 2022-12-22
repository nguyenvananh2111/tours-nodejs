const User = require('../models/userModel');
const catchAsync = require('../utils/catchAsync');

exports.createUser = async (req, res) => {
  res.status(500).json({
    status: 'error',
    message: 'This route is not defined! Please use /signup instead',
  });
};

exports.getUser = catchAsync(async (req, res) => {
  const query = User.findById(req.params.id);
  query.select('-__v');
  const doc = await query;
  res.status(200).json({
    status: 'success',
    data: {
      data: doc,
    },
  });
});
