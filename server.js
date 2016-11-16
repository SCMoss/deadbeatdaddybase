//Steven Craig Moss: Web Developer
//
//Deadbeat Daddybase: The Ultimate Database of No-good Fathers!
//
//V School Project Fall/Winter 2016

//Part 1 : Express Webserver

var express = require('express');
var app = express();



var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var path = require('path');
var port = process.env.PORT || 8000;



app.use(bodyParser.json());
app.use(express.static(path.join('public')));
app.use('/deadbeat', require('/routes/deadbeat-routes')); /*WHAT GOES IN THE FIRST '' PATHWAY????? DONT REMEMBER */



mongoose.connect('mongodb://localhost/deadbeat', function () {
    console.log('You are now connected to the database');
});



app.listen(port, function () {
    console.log('Holy shit, You know what you are doing!');
});

// Part 2 should be deadbeat.js