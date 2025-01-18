import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { confirmAlert } from 'react-confirm-alert';
import 'react-confirm-alert/src/react-confirm-alert.css';

const BookingDetails = () => {
    const [bookingDetails, setBookingDetails] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchBookings = async () => {
            try {
                const response = await axios.get('/api/bookings');
                setBookingDetails(response.data);
            } catch (err) {
                handleError(err);
            } finally {
                setLoading(false);
            }
        };
        fetchBookings();
    }, []);

    const handleDeleteBooking = async (bookingId) => {
        try {
            await axios.delete(`/api/bookings/${bookingId}`);
            setBookingDetails(bookingDetails.filter(booking => booking._id !== bookingId));
        } catch (err) {
            handleError(err);
        }
    };

    const confirmDelete = (bookingId) => {
        confirmAlert({
            title: 'Confirm Delete',
            message: 'Are you sure you want to delete this booking?',
            buttons: [
                { label: 'Yes', onClick: () => handleDeleteBooking(bookingId) },
                { label: 'No', onClick: () => {} }
            ]
        });
    };

    const handleError = (err) => {
        console.error("Error:", err);
        if (err.response) {
            setError(`Server error: ${err.response.status} - ${err.response.data?.message || 'Unknown error'}`);
        } else if (err.request) {
            setError("Network error. Please check your internet connection.");
        } else {
            setError(`Request setup error: ${err.message}`);
        }
    };

    if (loading) {
        return <div className="text-center">Loading...</div>;
    }

    if (error) {
        return <div className="text-red-500">{error}</div>;
    }

    if (bookingDetails.length === 0) {
        return <div>No bookings found.</div>;
    }

    return (
        <div className="p-4">
            <h2>Booking Details</h2>
            <ul className="space-y-3">
                {bookingDetails.map((booking) => (
                    <li key={booking._id} className="p-3 bg-gray-100 rounded-lg shadow-sm flex justify-between items-start"> {/* items-start for better alignment */}
                        <div>
                            <p className="font-semibold">{booking.name}</p>
                            <p className="text-gray-600 text-sm">Contact: {booking.contact}</p>
                            <p className="text-gray-600 text-sm">Service: {booking.service}</p>
                            <p className="text-gray-600 text-sm">Timing: {booking.timing}</p>
                            <p className="text-gray-600 text-sm">Date: {booking.date}</p>
                            <p className="text-gray-600 text-sm">Address: {booking.address}</p>
                        </div>
                        <button className="text-red-500 hover:text-red-700 focus:outline-none mt-2" onClick={() => confirmDelete(booking._id)}>Delete</button> {/* mt-2 for spacing */}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default BookingDetails;