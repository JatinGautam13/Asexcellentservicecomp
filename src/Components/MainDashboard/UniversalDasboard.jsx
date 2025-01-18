import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { AuthProvider } from "../Auth/AuthContext"; // Import AuthProvider
// Import all the components
import Home from "../Dashboard.jsx/Home"
import ServicePage from "../Dashboard.jsx/ServicePage";
import BookingPage from "../Dashboard.jsx/BookingPage";
import AboutPage from "../Dashboard.jsx/AboutPage";
import ReviewPage from "../Dashboard.jsx/Reviewpage"
import HelpPage from "../Dashboard.jsx/HelpPage";
import TermsPage from "../Dashboard.jsx/TermsPage";
import NotFoundPage from "../Dashboard.jsx/PageNotFound"; // 404 page
import AdminPage from "../Dashboard.jsx/AdminPage";
import Login from "../Auth/Login";
import PrivacyPage from "../Dashboard.jsx/PrivacyPage";
import ContactPages from "../Dashboard.jsx/ContactPages";

const UniversalDashboard = () => {
  return (
    <AuthProvider>
    <Router>
      <div
        className="relative flex size-full min-h-screen flex-col bg-slate-50 group/design-root overflow-x-hidden"
        style={{ fontFamily: "Manrope, 'Noto Sans', sans-serif" }}
      >
        {/* Define Routes */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<ServicePage />} />
          <Route path="/booking" element={<BookingPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/reviews" element={<ReviewPage />} />
          <Route path="/help" element={<HelpPage />} />
          <Route path="/Terms&services" element={<TermsPage />} />
          <Route path="/Privacy" element={<PrivacyPage />} />
          <Route path="/contact" element={<ContactPages />} />
          <Route path="/admin" element={<AdminPage />} />
          <Route path="/login" element={<Login />} />
          {/* Catch-all route for 404 */}
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </div>
    </Router>
    </AuthProvider>
  );
};

export default UniversalDashboard;
