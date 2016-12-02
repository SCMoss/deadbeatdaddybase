//Steven Craig Moss: Web Developer 

//DBDaddybase

//Part 3 Routes in Express




var express = require('express');
var deadbeatRouter = express.Router(); //<============ THE METHOD ON THE OBJECT IS CAPITALIZED 
var deadbeatData = require('../models/deadbeat');
deadbeatRouter.get('/', function(req,res) {
	deadbeatData.find(function(err,deadbeats) {
		if(err) {
			res.status(500).send(err);
		} else {
			res.send(deadbeats);
		};
	});
});

module.exports = deadbeatRouter;