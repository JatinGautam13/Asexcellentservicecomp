const mongoose = require('mongoose');

const bookingSchema = new mongoose.Schema({
    name: String,
    contact: String,
    service: String,
    timing: String,
    date: String,
    address: String
});

module.exports = mongoose.model('Booking', bookingSchema);