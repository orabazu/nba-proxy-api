'use strict';
const express = require('express');

const router = express.Router();
const apiCemeteryController = require('../controllers/api.teams.controller');


const bodyParser = require('body-parser');


router.use(bodyParser.urlencoded({ extended: true }));

//middleware if needed
router.use(function (req, res, next) {
    next(); // make sure we go to the next routes and don't stop here
});

router.route('/teams')
    .get(apiCemeteryController.getTeams)


module.exports = router;