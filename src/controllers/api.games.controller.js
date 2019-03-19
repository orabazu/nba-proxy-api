const https = require('https');

// GET games
const getGames = async (req, res) => {
  try {
    await https.get('https://www.balldontlie.io/api/v1/games?dates[]=2019-02-01&dates[]=2019-02-26', (resp) => {
      let data = '';

      resp.on('data', (chunk) => {
        data += chunk;
      });

      resp.on('end', () => {
        res.status(200).json({
          status: 'success',
          data,
        });
      });
    });
  } catch (err) {
    res.status(400).json({
      status: 'error',
      data: err.stack,
    });
  }
};
exports.getGames = getGames;
