import React from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../Auth/AuthContext"; // Import Auth Context
import BookingDetails from "../AdminComponents/BookingDetails";
import CustomerHelpDetails from "../AdminComponents/CustomerHelpDetails";

const AdminPage = () => {
  const { isAuthenticated, logout } = useAuth();
  const navigate = useNavigate();

  // Redirect to login page if not authenticated
  React.useEffect(() => {
    if (!isAuthenticated) {
      navigate("/login");
    }
  }, [isAuthenticated, navigate]);

  const handleLogout = () => {
    logout();
    navigate("/login");
  };

  return (
    <div className="flex flex-col min-h-screen bg-gray-50 p-6">
      <h1 className="text-2xl font-bold text-center mb-6">Admin Dashboard</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Booking Details Section */}
        <div className="bg-white shadow-md rounded-lg p-4">
          <h2 className="text-lg font-semibold text-gray-800 mb-4">Booking Details</h2>
          <BookingDetails />
        </div>

        {/* Customer Help Details Section */}
        <div className="bg-white shadow-md rounded-lg p-4">
          <h2 className="text-lg font-semibold text-gray-800 mb-4">Customer Help Details</h2>
          <CustomerHelpDetails />
        </div>
      </div>

      {/* Logout Button */}
      <div className="mt-6 flex justify-center">
        <button
          onClick={handleLogout}
          className="px-6 py-2 bg-red-500 text-white rounded-lg font-medium hover:bg-red-600"
        >
          Logout
        </button>
      </div>
    </div>
  );
};

export default AdminPage;
