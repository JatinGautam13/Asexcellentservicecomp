// // client/src/components/SlotBooking.js
// import React, { useState } from 'react';
// import axios from 'axios';

// const SlotBooking = ({ selectedDate, selectedTime, selectedType, onBookingConfirm }) => {
//     const [errorMessage, setErrorMessage] = useState("");
//     const [showModal, setShowModal] = useState(false);
//     const [customerDetails, setCustomerDetails] = useState({
//         name: "",
//         phone: "+91",
//         address: "",
//     });

//     const handleConfirmBooking = () => {
//         if (!selectedDate || !selectedTime || !selectedType) {
//             setErrorMessage("Please select a date, time slot, and cleaning type.");
//             return;
//         }

//         const today = new Date();
//         const selectedDateOnly = new Date(
//             selectedDate.getFullYear(),
//             selectedDate.getMonth(),
//             selectedDate.getDate()
//         );
//         const todayOnly = new Date(today.getFullYear(), today.getMonth(), today.getDate());

//         if (selectedDateOnly < todayOnly) {
//             setErrorMessage("Please select a current or upcoming date.");
//             return;
//         }

//         setErrorMessage("");
//         setShowModal(true);
//     };

//     const formatDate = (date) => {
//         if (!date) return "Not Selected";
//         return date.toLocaleDateString("en-GB", {
//             day: "2-digit",
//             month: "2-digit",
//             year: "numeric",
//         });
//     };

//     const handleInputChange = (e) => {
//         const { name, value } = e.target;
//         if (name === "phone") {
//             // Only allow numbers after +91 and limit to 10 digits
//             const phoneWithoutPrefix = value.replace("+91", "");
//             if (!/^\d*$/.test(phoneWithoutPrefix) || phoneWithoutPrefix.length > 10) return;
//             setCustomerDetails(prevDetails => ({ ...prevDetails, [name]: `+91${phoneWithoutPrefix}` }));
//         } else {
//             setCustomerDetails(prevDetails => ({ ...prevDetails, [name]: value }));
//         }
//     };


//     const handleProceedPayment = async () => {
//         const phoneWithoutPrefix = customerDetails.phone.replace("+91", "");
//         if (!customerDetails.name || !customerDetails.phone || !customerDetails.address) {
//             setErrorMessage("Please fill in all required fields.");
//             return;
//         }

//         if (phoneWithoutPrefix.length !== 10 || isNaN(phoneWithoutPrefix)) {
//             setErrorMessage("Please enter a valid 10-digit phone number.");
//             return;
//         }

//         setErrorMessage("");
//         setShowModal(false);

//         const bookingDetails = {
//             name: customerDetails.name,
//             contact: customerDetails.phone,
//             service: selectedType,
//             timing: selectedTime,
//             date: formatDate(selectedDate),
//             address: customerDetails.address,
//         };

//         try {
//             const response = await axios.post('/api/bookings', bookingDetails);
//             if (response.data.success) {
//                 alert('Booking confirmed!');
//                 if (onBookingConfirm) {
//                     onBookingConfirm();
//                 }
//             } else {
//                 setErrorMessage(response.data.message || 'Error saving booking.');
//             }
//         } catch (error) {
//             console.error("Booking Error:", error);
//             setErrorMessage('Network error or server issue. Please check your internet connection and the server.');
//         }
//     };

//     return (
//         <div className="flex justify-center items-center p-6 mt-10 mb-24 bg-white shadow-md rounded-lg border">
//             <div className="grid grid-cols-3 gap-4 w-full max-w-lg">
//                 <div className="text-center p-4 border rounded-lg shadow-sm">
//                     <p className="text-sm text-gray-500 font-medium">Date</p>
//                     <p className="text-lg font-bold text-gray-800 ">{formatDate(selectedDate)}</p>
//                 </div>
//                 <div className="text-center p-4 border rounded-lg shadow-sm">
//                     <p className="text-sm text-gray-500 font-medium">Time</p>
//                     <p className="text-lg font-bold text-gray-800">{selectedTime || "Not Selected"}</p>
//                 </div>
//                 <div className="text-center p-4 border rounded-lg shadow-sm">
//                     <p className="text-sm text-gray-500 font-medium">Type</p>
//                     <p className="text-lg font-bold text-gray-800">{selectedType || "Not Selected"}</p>
//                 </div>
//                 <div className="flex justify-center items-center col-span-3">
//                     <button
//                         onClick={handleConfirmBooking}
//                         className="px-6 py-3 bg-blue-600 text-white font-medium rounded-lg shadow hover:bg-blue-700 transition w-full"
//                         aria-label="Book Slot"
//                     >
//                         Book Slot
//                     </button>
//                 </div>
//                 {errorMessage && !showModal && (
//                     <div className="col-span-3 text-center text-red-600 font-medium mt-2" role="alert">
//                         {errorMessage}
//                     </div>
//                 )}
//             </div>
//             {showModal && (
//                 <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
//                     <div className="bg-white rounded-lg shadow-lg p-6 w-full max-w-md" role="dialog" aria-modal="true">
//                         <h2 className="text-xl font-bold text-gray-800 mb-4">Customer Details</h2>
//                         <form className="space-y-4">
//                             <div>
//                                 <label className="block text-sm font-medium text-gray-700">Name</label>
//                                 <input
//                                     type="text"
//                                     name="name"
//                                     value={customerDetails.name}
//                                     onChange={handleInputChange}
//                                     className={`w-full p-2 border rounded-lg ${errorMessage && !customerDetails.name ? "border-red-500" : ""}`}
//                                     placeholder="Enter your name"
//                                     aria-invalid={errorMessage && !customerDetails.name}
//                                     required // Added required attribute
//                                 />
//                             </div>
//                             <div>
//                                 <label className="block text-sm font-medium text-gray-700">Phone Number</label>
//                                 <input
//                                     type="text"
//                                     name="phone"
//                                     value={customerDetails.phone}
//                                     onChange={handleInputChange}
//                                     className={`w-full p-2 border rounded-lg ${errorMessage && (!customerDetails.phone || customerDetails.phone.length !== 13) ? "border-red-500" : ""}`}
//                                     placeholder="Enter your phone number"
//                                     aria-invalid={errorMessage && (!customerDetails.phone || customerDetails.phone.length !== 13)}
//                                     required // Added required attribute
//                                 />
//                             </div>
//                             <div>
//                                 <label className="block text-sm font-medium text-gray-700">Address</label>
//                                 <textarea
//                                     name="address"
//                                     value={customerDetails.address}
//                                     onChange={handleInputChange}
//                                     className={`w-full p-2 border rounded-lg ${errorMessage && !customerDetails.address ? "border-red-500" : ""}`}
//                                     placeholder="Enter your address"
//                                     aria-invalid={errorMessage && !customerDetails.address}
//                                     required // Added required attribute
//                                 />
//                             </div>
//                         </form>
//                         {errorMessage && (
//                             <div className="text-red-600 text-sm font-medium mt-2" role="alert">{errorMessage}</div>
//                         )}
//                         <div className="mt-6 flex justify-between">
//                             <button
//                                 onClick={() => setShowModal(false)}
//                                 className="px-4 py-2 bg-gray-300 text-gray-800 rounded-lg shadow hover:bg-gray-400"
//                                 aria-label="Cancel"
//                             >
//                                 Cancel
//                             </button>
//                             <button
//                                 onClick={handleProceedPayment}
//                                 className="px-4 py-2 bg-blue-600 text-white rounded-lg shadow hover:bg-blue-700"
//                                 aria-label="Proceed to Payment"
//                             >
//                                 Proceed to Payment
//                             </button>
//                         </div>
//                     </div>
//                 </div>
//             )}
//         </div>
//     );
// };

// export default SlotBooking;

import React, { useState } from 'react';
import axios from 'axios';

const SlotBooking = ({ selectedDate, selectedTime, selectedType, onBookingConfirm }) => {
    const [errorMessage, setErrorMessage] = useState("");
    const [showModal, setShowModal] = useState(false);
    const [showConfirm, setShowConfirm] = useState(false);
    const [customerDetails, setCustomerDetails] = useState({
        name: "",
        phone: "+91",
        address: "",
    });

    const handleConfirmBooking = () => {
        if (!selectedDate || !selectedTime || !selectedType) {
            setErrorMessage("Please select a date, time slot, and cleaning type.");
            return;
        }

        const today = new Date();
        const selectedDateOnly = new Date(
            selectedDate.getFullYear(),
            selectedDate.getMonth(),
            selectedDate.getDate()
        );
        const todayOnly = new Date(today.getFullYear(), today.getMonth(), today.getDate());

        if (selectedDateOnly < todayOnly) {
            setErrorMessage("Please select a current or upcoming date.");
            return;
        }

        setErrorMessage("");
        setShowModal(true);
    };

    const formatDate = (date) => {
        if (!date) return "Not Selected";
        return date.toLocaleDateString("en-GB", {
            day: "2-digit",
            month: "2-digit",
            year: "numeric",
        });
    };

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        if (name === "phone") {
            // Only allow numbers after +91 and limit to 10 digits
            const phoneWithoutPrefix = value.replace("+91", "");
            if (!/^\d*$/.test(phoneWithoutPrefix) || phoneWithoutPrefix.length > 10) return;
            setCustomerDetails(prevDetails => ({ ...prevDetails, [name]: `+91${phoneWithoutPrefix}` }));
        } else {
            setCustomerDetails(prevDetails => ({ ...prevDetails, [name]: value }));
        }
    };

    const handleProceedPayment = async () => {
        const phoneWithoutPrefix = customerDetails.phone.replace("+91", "");
        if (!customerDetails.name || !customerDetails.phone || !customerDetails.address) {
            setErrorMessage("Please fill in all required fields.");
            return;
        }

        if (phoneWithoutPrefix.length !== 10 || isNaN(phoneWithoutPrefix)) {
            setErrorMessage("Please enter a valid 10-digit phone number.");
            return;
        }

        setErrorMessage("");
        setShowModal(false);

        const bookingDetails = {
            name: customerDetails.name,
            contact: customerDetails.phone,
            service: selectedType,
            timing: selectedTime,
            date: formatDate(selectedDate),
            address: customerDetails.address,
        };

        try {
            const response = await axios.post('/api/bookings', bookingDetails);
            if (response.data.success) {
                setShowConfirm(true);
                if (onBookingConfirm) {
                    onBookingConfirm();
                }
            } else {
                setErrorMessage(response.data.message || 'Error saving booking.');
            }
        } catch (error) {
            console.error("Booking Error:", error);
            setErrorMessage('Network error or server issue. Please check your internet connection and the server.');
        }
    };

    return (
        <div className="flex flex-col md:flex-row justify-center items-center p-6 mt-10 mb-24 bg-white shadow-md rounded-lg border">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 w-full max-w-lg">
                <div className="text-center p-4 border rounded-lg shadow-sm">
                    <p className="text-sm text-gray-500 font-medium">Date</p>
                    <p className="text-lg font-bold text-gray-800 ">{formatDate(selectedDate)}</p>
                </div>
                <div className="text-center p-4 border rounded-lg shadow-sm">
                    <p className="text-sm text-gray-500 font-medium">Time</p>
                    <p className="text-lg font-bold text-gray-800">{selectedTime || "Not Selected"}</p>
                </div>
                <div className="text-center p-4 border rounded-lg shadow-sm">
                    <p className="text-sm text-gray-500 font-medium">Type</p>
                    <p className="text-lg font-bold text-gray-800">{selectedType || "Not Selected"}</p>
                </div>
                <div className="flex justify-center items-center col-span-1 md:col-span-3">
                    <button
                        onClick={handleConfirmBooking}
                        className="px-6 py-3 bg-blue-600 text-white font-medium rounded-lg shadow hover:bg-blue-700 transition w-full"
                        aria-label="Book Slot"
                    >
                        Book Slot
                    </button>
                </div>
                {errorMessage && !showModal && (
                    <div className="col-span-1 md:col-span-3 text-center text-red-600 font-medium mt-2" role="alert">
                        {errorMessage}
                    </div>
                )}
            </div>
            {showModal && (
                <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
                    <div className="bg-white rounded-lg shadow-lg p-4 w-full max-w-sm" role="dialog" aria-modal="true">
                        <h2 className="text-xl font-bold text-gray-800 mb-2">Customer Details</h2>
                        <form className="space-y-4">
                            <div>
                                <label className="block text-sm font-medium text-gray-700">Name</label>
                                <input
                                    type="text"
                                    name="name"
                                    value={customerDetails.name}
                                    onChange={handleInputChange}
                                    className={`w-full p-2 border rounded-lg ${errorMessage && !customerDetails.name ? "border-red-500" : ""}`}
                                    placeholder="Enter your name"
                                    aria-invalid={errorMessage && !customerDetails.name}
                                    required // Added required attribute
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-700">Phone Number</label>
                                <input
                                    type="text"
                                    name="phone"
                                    value={customerDetails.phone}
                                    onChange={handleInputChange}
                                    className={`w-full p-2 border rounded-lg ${errorMessage && (!customerDetails.phone || customerDetails.phone.length !== 13) ? "border-red-500" : ""}`}
                                    placeholder="Enter your phone number"
                                    aria-invalid={errorMessage && (!customerDetails.phone || customerDetails.phone.length !== 13)}
                                    required // Added required attribute
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-700">Address</label>
                                <textarea
                                    name="address"
                                    value={customerDetails.address}
                                    onChange={handleInputChange}
                                    className={`w-full p-2 border rounded-lg ${errorMessage && !customerDetails.address ? "border-red-500" : ""}`}
                                    placeholder="Enter your address"
                                    aria-invalid={errorMessage && !customerDetails.address}
                                    required // Added required attribute
                                />
                            </div>
                        </form>
                        {errorMessage && (
                            <div className="text-red-600 text-sm font-medium mt-2" role="alert">{errorMessage}</div>
                        )}
                        <div className="mt-4 flex justify-between">
                            <button
                                onClick={() => setShowModal(false)}
                                className="px-4 py-2 bg-gray-300 text-gray-800 rounded-lg shadow hover:bg-gray-400"
                                aria-label="Cancel"
                            >
                                Cancel
                            </button>
                            <button
                                onClick={handleProceedPayment}
                                className="px-4 py-2 bg-blue-600 text-white rounded-lg shadow hover:bg-blue-700"
                                aria-label="Proceed to Payment"
                            >
                                Proceed to Payment
                            </button>
                        </div>
                    </div>
                </div>
            )}
            {showConfirm && (
                <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
                    <div className="bg-white rounded-lg shadow-lg p-4 w-full max-w-sm" role="dialog" aria-modal="true">
                        <h2 className="text-xl font-bold text-gray-800 mb-2">Booking Confirmed😊</h2>
                        <p className="text-gray-700 mb-4">Your booking has been confirmed.</p>
                        <button
                            onClick={() => setShowConfirm(false)}
                            className="px-4 py-2 bg-blue-600 text-white rounded-lg shadow hover:bg-blue-700"
                            aria-label="Close"
                        >
                            Close
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
};

export default SlotBooking;
