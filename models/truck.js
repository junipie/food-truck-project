var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var TruckSchema = new Schema({
    truckName: String,
    city: String,
    description: String,
    image: url,
    cuisine: String,
    currentLocation: String,
    hours: array of strings,
    timeCategory: array of strings,
    payment: array of strings,
    foodOptions: array of strings,
    facebook: url,
    twitter: url
});

module.exports = mongoose.model('Blog', BlogSchema);