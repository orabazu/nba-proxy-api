
const data = require('./../services/games.service');

// GET teams
const getTeams = async (req, res) => {
  try {
    res.status(200).json({
      status: 'success',
      data,
    });
  } catch (err) {
    res.status(400).json({
      status: 'error',
      data: err.stack,
    });
  }
};
exports.getTeams = getTeams;
