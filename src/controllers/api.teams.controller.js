const https = require("https");


const teams = async (req, res) => {

    try {
        https.get('https://www.balldontlie.io/api/v1/teams', (resp) => {
            let data = '';

            resp.on('data', (chunk) => {
                data += chunk;
            });

            resp.on('end', () => {
                res.status(200).json({
                    status: "success",
                    data: data,
                  });
            });
        });
    } catch (err) {

        res.status(400).json({
            status: "error",
            data: err.stack,
        });
    }

};

exports.getTeams = teams;

