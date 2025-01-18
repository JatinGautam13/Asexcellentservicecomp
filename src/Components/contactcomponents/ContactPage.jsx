import React from 'react';

const ContactPage = () => {
  return (
    <div className="bg-slate-50 py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto flex flex-col lg:flex-row">
        <div className="lg:w-1/2 lg:pr-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-4">
            Contact Us
          </h1>
          <p className="mb-4">
            We're here to help! Get in touch with us through any of the following methods.
          </p>
          <div className="mb-6">
            <h2 className="text-2xl font-bold text-gray-900 mb-2">
              Office Address
            </h2>
            <p>
              Asexcellents Services<br />
              Tigri Ambedkar Nagar<br />
              New Delhi, Delhi 110080<br />
              India
            </p>
          </div>
          <div className="mb-6">
            <h2 className="text-2xl font-bold text-gray-900 mb-2">
              Phone
            </h2>
            <p>+91 9289872079</p>
            <p>+91 9811547610</p>
          </div>
          <div className="mb-6">
            <h2 className="text-2xl font-bold text-gray-900 mb-2">
              Email
            </h2>
            <p>asexcellentservices3@gmail.com</p>
          </div>
          <div className="mb-6">
            <h2 className="text-2xl font-bold text-gray-900 mb-2">
              Social Media
            </h2>
            <ul>
              <li>
                <a href="https://www.facebook.com/asexcellentsservices" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:text-blue-700">
                  Facebook
                </a>
              </li>
              <li>
                <a href="https://twitter.com/asexcellents" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:text-blue-700">
                  Twitter
                </a>
              </li>
              <li>
                <a href="https://www.instagram.com/asexcellentsservices" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:text-blue-700">
                  Instagram
                </a>
              </li>
              <li>
                <a href="https://www.linkedin.com/company/asexcellentsservices" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:text-blue-700">
                  LinkedIn
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="lg:w-1/2 lg:pl-8 mt-8 lg:mt-0">
          <iframe
            title="Google Maps"
            width="100%"
            height="450"
            frameBorder="0"
            style={{ border: 0 }}
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14023.697182344589!2d77.22072421918251!3d28.51693493649824!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce2fa28d5d6d1%3A0xabed8123456789!2sTigri%20Ambedkar%20Nagar%2C%20New%20Delhi%2C%20Delhi%20110080%2C%20India!5e0!3m2!1sen!2sin!4v1631626913245!5m2!1sen!2sin"
            allowFullScreen
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
