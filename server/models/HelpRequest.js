const mongoose = require('mongoose');

const helpRequestSchema = new mongoose.Schema({
    name: { type: String, required: true },
    mobile: { type: String, required: true },
    issue: String, // Optional search query
}, { timestamps: true }); // Add timestamps for createdAt and updatedAt

module.exports = mongoose.model('HelpRequest', helpRequestSchema);