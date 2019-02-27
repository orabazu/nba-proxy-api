
const express = require('express');
const bodyParser = require('body-parser');


const router = express.Router();
const apiTeamsController = require('../controllers/api.teams.controller');
const apiGamesController = require('../controllers/api.games.controller');
const apiPlayersController = require('../controllers/api.players.controller');


router.use(bodyParser.urlencoded({ extended: true }));

//middleware if needed
router.use(function (req, res, next) {
    next(); // make sure we go to the next routes and don't stop here
});

router.route('/teams').get(apiTeamsController.getTeams)

router.route('/games').get(apiGamesController.getGames)

router.route('/players').get(apiPlayersController.getPlayers)


module.exports = router;
