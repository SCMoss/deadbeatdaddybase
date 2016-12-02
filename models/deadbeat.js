//Steven Craig Moss: Web Developer
//
//Deadbeat Daddybase: The Ultimate Database of No-good Fathers!
//
//V School Project Fall/Winter 2016



var mongoose = require('mongoose');



var deadbeatSchema = new mongoose.Schema({
    fName: String,
    lName: String,
    dob: String,
    numberOfChildren: Number,
    childName: String,
    jointCustody: Boolean,
    soleCustody: Boolean,
    neither: Boolean,
    briefBio: String
});

module.exports = mongoose.model('Deadbeat', deadbeatSchema);





// Question how do I add an image or at least three images (mom, child(ren), and DBD)