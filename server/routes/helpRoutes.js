const express = require('express');
const router = express.Router();
const HelpRequest = require('../models/HelpRequest');
const { ObjectId } = require('mongoose').Types; 


router.post('/', async (req, res) => {
    try {
        const newRequest = new HelpRequest(req.body);
        await newRequest.save();
        res.status(201).json({ success: true, message: 'Help request submitted successfully' });
    } catch (error) {
        console.error("Error saving help request:", error);
        if (error.name === 'ValidationError') {
            return res.status(400).json({ success: false, message: error.message }); // Send validation errors
        }
        res.status(500).json({ success: false, message: 'Error submitting help request' });
    }
});

router.get('/', async (req, res) => { // Correct route definition
    try {
        const helpRequests = await HelpRequest.find();
        res.json(helpRequests); // Send JSON response
    } catch (error) {
        console.error("Error fetching help requests:", error);
        res.status(500).json({ message: 'Error fetching help requests' }); // Send error response
    }
});

// router.delete('/:id', async (req, res) => {
//     try {
//         const helpRequestId = req.params.id;
//         console.log("Deleting request with ID:", helpRequestId); // Log the ID

//         const deletedRequest = await HelpRequest.findByIdAndDelete(helpRequestId);

//         if (!deletedRequest) {
//             console.log(`Request with ID ${helpRequestId} not found.`);
//             return res.status(404).json({ success: false, message: 'Help request not found' });
//         }

//         console.log("Request deleted successfully:", deletedRequest);
//         res.json({ success: true, message: 'Help request deleted' });

//     } catch (error) {
//         console.error("Error deleting help request:", error); // Log the full error
//         res.status(500).json({ success: false, message: 'Error deleting help request' });
//     }
// });


router.delete('/:id', async (req, res) => { // Correct route definition
    // console.log("DELETE request received for ID:", req.params.id); // Log the ID

    try {
        if (!ObjectId.isValid(req.params.id)) {
            return res.status(400).json({ message: 'Invalid booking ID' });
        }
        const deletedRequest = await HelpRequest.findByIdAndDelete(req.params.id);
        if (!deletedRequest) {
            return res.status(404).json({ message: 'Help request not found' });
        }
        res.status(200).json({ success: true, message: 'Help Request deleted' }); // Send 200 on success
    } catch (error) {
        // console.error("Error deleting booking:", error);
        res.status(500).json({ success: false, message: 'Server error deleting booking' });
    }
});
module.exports = router;
