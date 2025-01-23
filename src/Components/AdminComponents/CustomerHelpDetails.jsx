import React, { useState, useEffect } from "react";
import axios from "axios";
import { confirmAlert } from 'react-confirm-alert'; // Import confirmAlert
import 'react-confirm-alert/src/react-confirm-alert.css'; // Import CSS

const CustomerHelpDetails = () => {
    const [helpRequests, setHelpRequests] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [deleteError, setDeleteError] = useState(null);
    const [isDeleting, setIsDeleting] = useState(false);

    useEffect(() => {
        const fetchHelpRequests = async () => {
            try {
                const response = await axios.get('/api/help-requests');
                setHelpRequests(response.data);
            } catch (err) {
                console.error("Error fetching help requests:", err);
                setError("Error fetching help requests.");
            } finally {
                setLoading(false);
            }
        };

        fetchHelpRequests();
    }, []);

    const handleDeleteRequest = (helpRequestId) => {
        confirmAlert({
            title: 'Confirm Delete',
            message: 'Are you sure you want to delete this help request?',
            buttons: [
                {
                    label: 'Yes',
                    onClick: () => confirmDelete(helpRequestId),
                },
                {
                    label: 'No',
                    onClick: () => { }, // Do nothing if "No" is clicked
                },
            ],
        });
    };

    const confirmDelete = async (helpRequestId) => {
        setIsDeleting(true);
        setDeleteError(null);
        try {
            const response = await axios.delete(`/api/help-requests/${helpRequestId}`);
            if (response.data.success) {
                setHelpRequests((prevRequests) => prevRequests.filter((help) => help._id !== helpRequestId));
            } else {
                console.error("Error deleting help request:", response.data);
                setDeleteError(response.data.message || "An error occurred during deletion.");
            }
        } catch (err) {
            console.error("Error deleting help request:", err);
            setDeleteError("A network error occurred during deletion.");
        } finally {
            setIsDeleting(false);
        }
    };

    if (loading) {
        return <div className="text-center">Loading...</div>;
    }

    if (error) {
        return <div className="text-red-500">{error}</div>;
    }

    if (helpRequests.length === 0) {
        return <div>No help requests found.</div>;
    }

    return (
        <div className="p-4">
            <h2>Help Requests</h2>
            <ul className="space-y-3">
                {helpRequests.map((help) => (
                    <li key={help._id} className="p-3 bg-gray-100 rounded-lg shadow-sm flex justify-between items-start">
                        <div>
                            <p className="font-semibold">{help.name}</p>
                            <p className="text-gray-600 text-sm">Contact: {help.mobile}</p>
                            <p className="text-gray-600 text-sm">Issue: {help.issue}</p>
                        </div>
                        <button
                            className="text-red-500 hover:text-red-700 focus:outline-none mt-2"
                            onClick={() => handleDeleteRequest(help._id)} // Call handleDeleteRequest to trigger confirmAlert
                            disabled={isDeleting}
                        >
                            {isDeleting ? <span className="animate-spin rounded-full h-4 w-4 border-t-2 border-b-2 border-red-500 mr-2 inline-block"></span> : null}
                            Delete
                        </button>
                    </li>
                ))}
            </ul>
            {deleteError && <div className="text-red-500 mt-4">{deleteError}</div>}
        </div>
    );
};

export default CustomerHelpDetails;