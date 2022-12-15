const User = require('../models/userModel');

exports.createUser = async (req, res) => {
  res.status(500).json({
    status: 'error',
    message: 'This route is not defined! Please use /signup instead',
  });
};

exports.getUser = async (req, res) => {
  try {
    const query = User.findById(req.params.id);
    query.select('-__v');
    const doc = await query;
    res.status(200).json({
      status: 'success',
      data: {
        data: doc,
      },
    });
  } catch (err) {
    res.status(400).json({
      message: err.message,
    });
  }
};
