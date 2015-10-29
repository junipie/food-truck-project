var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var TruckSchema = new Schema({
    truckName: String,
    city: String,
    description: String,
    // image: url,
    cuisine: String,
    currentLocation: String,
    hours: Array,
    timeCategory: Array,
    payment: Array,
    foodOptions: Array,
    facebook: String,
    twitter: String
});

module.exports = mongoose.model('Truck', TruckSchema);