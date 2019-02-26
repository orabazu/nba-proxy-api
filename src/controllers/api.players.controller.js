const https = require('https');

// GET games
const getPlayers = async (req, res) => {
  try {
    await https.get('https://www.balldontlie.io/api/v1/players', (resp) => {
      let data = '';

      resp.on('data', (chunk) => {
        data += chunk;
      });

      resp.on('end', () => {
        console.log(JSON.parse(data));
        let withSource = JSON.parse(data).data.map((player) => {
          const img_name = player.first_name.toLowerCase();
          const img_surname = player.last_name.toLowerCase();
          return {
            ...player,
            img_src: `https://s3.amazonaws.com/nba8bit/teams/Cleveland_Cavaliers/${img_name}_${img_surname}.png`,
          };
        });

        const result = JSON.stringify(withSource);
        res.status(200).json({
          status: 'success',
          withSource,
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
