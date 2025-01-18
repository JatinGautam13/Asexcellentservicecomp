const express = require('express');
const router = express.Router();
const Booking = require('../models/booking');
const { ObjectId } = require('mongoose').Types; 

router.post('/', async (req, res) => {
    try {
        const booking = new Booking(req.body);
        const savedBooking = await booking.save();
        res.status(201).json({ success: true, savedBooking });
    } catch (error) {
        console.error("Error saving booking", error);
        res.status(500).json({ success: false, message: error.message });
    }
});

router.get('/', async (req, res) => {
    try {
        const bookings = await Booking.find({});
        res.status(200).json(bookings);
    } catch (error) {
        console.error("Error fetching bookings:", error);
        res.status(500).json({ success: false, message: error.message });
    }
});


router.delete('/:id', async (req, res) => { // Correct route definition
    // console.log("DELETE request received for ID:", req.params.id); // Log the ID

    try {
        if (!ObjectId.isValid(req.params.id)) {
            return res.status(400).json({ message: 'Invalid booking ID' });
        }
        const deletedBooking = await Booking.findByIdAndDelete(req.params.id);
        if (!deletedBooking) {
            return res.status(404).json({ message: 'Booking not found' });
        }
        res.status(200).json({ message: 'Booking deleted' }); // Send 200 on success
    } catch (error) {
        // console.error("Error deleting booking:", error);
        res.status(500).json({ message: 'Server error deleting booking' });
    }
});


module.exports = router;



