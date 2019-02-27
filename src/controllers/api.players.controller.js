const https = require('https');

// GET games
const getPlayers = async (req, res) => {
  try {
    const page = req.query.page ? req.query.page : '2';
    await https.get(`https://www.balldontlie.io/api/v1/players?per_page=24&page=${page}`, (resp) => {
      let data = '';

      resp.on('data', (chunk) => {
        data += chunk;
      });

      resp.on('end', () => {
        const withSource = JSON.parse(data).data.map((player) => {
          const playerName = player.first_name.toLowerCase();
          const playerSurname = player.last_name.toLowerCase();
          const teamName = player.team.full_name.split(' ').join('_');
          return {
            ...player,
            img_src: `https://s3.amazonaws.com/nba8bit/teams/${teamName}/8bit/${playerName}_${playerSurname}_8bit.png`,
          };
        });

        const result = JSON.stringify(withSource);
        res.status(200).json({
          status: 'success',
          data: result,
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
exports.getPlayers = getPlayers;
