import React from "react";
import { FaInstagram, FaTwitter, FaFacebook } from "react-icons/fa";
import { Link } from 'react-router-dom';

const HomeFooter = () => {
  return (
    <footer className="py-6 bg-slate-50">
      <div className="container mx-auto px-4 sm:px-8 text-center text-gray-600">
        {/* Links Section */}
        <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-10 mb-6">
          <Link to="/Terms&services" className="hover:text-blue-500">Terms of Service</Link>
         <Link to="/Privacy" className="hover:text-blue-500">Privacy Policy</Link>
        <Link to="/contact" className="hover:text-blue-500">Contact Us</Link> 
        </div>

        {/* Social Icons Section */}
        <div className="flex justify-center space-x-6 text-xl text-gray-600 mb-6">
          <a href="https://www.instagram.com/asexcillentservices/?igsh=NWxocnB0cXBpbmp3#" target="_blank" className="hover:text-blue-500">
            <FaInstagram />
          </a>
          <a href="https://x.com/AS_Excillent_DC?t=zdV6l3aY-VQBoX-eECOPag&s=08" target="_blank" className="hover:text-blue-500">
            <FaTwitter />
          </a>
          <a href="https://www.facebook.com/people/As-Excillent-Services/61572026339087/?mibextid=ZbWKwL" target="_blank" className="hover:text-blue-500">
            <FaFacebook />
          </a>
        </div>

        {/* Copyright Section */}
        <p className="text-sm text-gray-500">
          &copy; {new Date().getFullYear()} Clean Living Inc. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default HomeFooter;
