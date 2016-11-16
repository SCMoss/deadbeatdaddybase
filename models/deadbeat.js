//Steven Craig Moss: Web Developer
//
//Deadbeat Daddybase: The Ultimate Database of No-good Fathers!
//
//V School Project Fall/Winter 2016



var mongoose = require('mongoose');



var deadbeatSchema = new mongoose.Schema({
    fName: String,
    lName: String,
    DBDName: String,
    numberOfChildren: Number,
    childName: String,
    jointCustody: Boolean,
    legalActionTaken: Boolean,
    childSupportAwarded: Boolean,
    doesFatherPayOnTime: String,
    lastTimeVisitingChild: String,
    briefBio: String
});

module.exports = mongoose.model('Deadbeat', deadbeatSchema);