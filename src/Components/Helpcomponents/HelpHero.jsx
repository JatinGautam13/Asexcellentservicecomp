import React, { useState } from "react";
import axios from "axios";

function HelpHero() {
    const [searchQuery, setSearchQuery] = useState("");
    const [showModal, setShowModal] = useState(false);
    const [name, setName] = useState("");
    const [mobile, setMobile] = useState("");
    const [error, setError] = useState("");
    const [successMessage, setSuccessMessage] = useState("");

    const handleSearch = (e) => {
        e.preventDefault();
        if (searchQuery.trim() !== "") {
            setShowModal(true);
        } else {
            alert("Please enter a search query.");
        }
    };

    const handleFormSubmit = async (e) => {
        e.preventDefault();
        setError("");
        setSuccessMessage("");

        if (!name.trim()) {
            setError("Name is required.");
            return;
        }
        if (mobile.length !== 10 || !/^\d+$/.test(mobile)) {
            setError("Mobile number must be a 10-digit number.");
            return;
        }

        try {
            // console.log("Data being sent:", { name, mobile, issue: searchQuery }); // Check data before sending
            const response = await axios.post("/api/help-requests", {
                name,
                mobile,
                issue: searchQuery,
            });

            // console.log("Response from server:", response); // Check the full response

            if (response.data.success) {
                setSuccessMessage(response.data.message);
                setShowModal(false);
                setName("");
                setMobile("");
                setSearchQuery("");
            } else {
                setError(response.data.message || "An error occurred.");
            }
        } catch (error) {
            console.error("Error sending data:", error);
            if (error.response) {
                console.error("Response data:", error.response.data);
                console.error("Response status:", error.response.status);
                console.error("Response headers:", error.response.headers);
                setError(error.response.data.message || `Server Error: ${error.response.status}`); // More informative error
            } else if (error.request) {
                console.error("Request:", error.request);
                setError("Network Error, Check your internet connection");
            } else {
                setError("An error occurred while submitting your request.");
            }
        }
    };

    const handleMobileChange = (e) => {
        const value = e.target.value;
        if (/^\d*$/.test(value) && value.length <= 10) {
            setMobile(value);
        }
    };

    return (
        <div
            className="flex flex-col items-center justify-center min-h-screen bg-no-repeat bg-center mt-[-7%]" // Adjusted margin-top
            style={{
                backgroundImage:
                    "url('https://ssl.gstatic.com/support/content/images/static/homepage_header_background_v2.svg')",
            }}
        >
            <div className="text-center">
                {/* Logo */}
                <div className="mb-4">
                    <img
                        src="/src/assets/loooooogo-removebg-preview.png" // Corrected path (leading slash)
                        alt="Logo"
                        className="w-28 mx-auto"
                    />
                </div>
                {/* Heading */}
                <h1 className="text-2xl md:text-4xl font-semibold text-gray-800 mb-6">
                    How can we help you?
                </h1>
                {/* Search Box */}
                <form className="relative max-w-lg mx-auto" onSubmit={handleSearch}>
                    <input
                        type="text"
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        placeholder="Describe your issue"
                        className="w-full py-3 px-5 text-gray-700 border border-gray-300 rounded-full shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                    <button
                        type="submit"
                        className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400 cursor-pointer"
                    >
                        Send
                    </button>
                </form>
            </div>

            {showModal && (
                <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
                    <div className="bg-white p-6 rounded-lg shadow-lg w-96">
                        <h2 className="text-lg font-semibold mb-4">Enter Your Details</h2>
                        {successMessage && <div className="text-green-500 mb-4">{successMessage}</div>}
                        <form onSubmit={handleFormSubmit}>
                            <div className="mb-4">
                                <label className="block text-gray-700 mb-2" htmlFor="name">
                                    Name:
                                </label>
                                <input
                                    type="text"
                                    id="name"
                                    value={name}
                                    onChange={(e) => setName(e.target.value)}
                                    className={`w-full py-2 px-4 border ${error && !name.trim() ? "border-red-500" : "border-gray-300"
                                        } rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500`}
                                />
                            </div>

                            <div className="mb-4">
                                <label className="block text-gray-700 mb-2" htmlFor="mobile">
                                    Mobile Number:
                                </label>
                                <div className="flex items-center">
                                    <span className="px-4 py-2 bg-gray-200 border border-gray-300 rounded-l-lg">
                                        +91
                                    </span>
                                    <input
                                        type="tel"
                                        id="mobile"
                                        value={mobile}
                                        onChange={handleMobileChange}
                                        maxLength={10}
                                        className={`w-full py-2 px-4 border ${error && (mobile.length !== 10 || !/^\d+$/.test(mobile)) ? "border-red-500" : "border-gray-300"
                                            } rounded-r-lg focus:outline-none focus:ring-2 focus:ring-blue-500`}
                                    />
                                </div>
                            </div>

                            {error && <div className="text-red-500 text-sm mb-4">{error}</div>}
                            <div className="flex justify-end space-x-4">
                                <button
                                    type="button"
                                    onClick={() => setShowModal(false)}
                                    className="py-2 px-4 bg-gray-300 text-gray-700 rounded-lg hover:bg-gray-400"
                                >
                                    Cancel
                                </button>
                                <button
                                    type="submit"
                                    className="py-2 px-4 bg-blue-500 text-white rounded-lg hover:bg-blue-600"
                                >
                                    Submit
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            )}
        </div>
    );
}

export default HelpHero;