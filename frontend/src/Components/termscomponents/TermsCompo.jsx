import React from 'react';

const TermsCompo = () => {
  return (
    <div className="max-w-4xl mx-auto p-6 bg-gray-100 rounded-lg shadow-md my-10">
      <header className="text-center border-b-2 border-green-500 mb-6">
        <h1 className="text-4xl font-bold mb-2">Terms of Services</h1>
        <h2 className="text-2xl text-green-500 font-semibold">Excillents</h2>
      </header>
      <section className="mb-6">
        <p className="text-lg">
          Welcome to Excillents! We are delighted to offer you our professional cleaning services. Before you use our services, please take a moment to read our terms of services.
        </p>
      </section>
      <section className="mb-6">
        <h3 className="text-xl font-semibold text-green-500 mb-2">Services Offered</h3>
        <p className="text-lg">
          Excillents provides top-notch cleaning services. Our team is dedicated to making your space spotless and organized.
        </p>
      </section>
      <section className="mb-6">
        <h3 className="text-xl font-semibold text-green-500 mb-2">Pay After Placement</h3>
        <p className="text-lg">
          We value our customers and trust in the quality of our services. That’s why we offer a "pay after placement" policy, allowing you to pay for our services once you're completely satisfied.
        </p>
      </section>
      <section className="mb-6">
        <h3 className="text-xl font-semibold text-green-500 mb-2">Terms and Conditions</h3>
        <ul className="list-disc list-inside text-lg">
          <li>All services must be scheduled in advance.</li>
          <li>Payment is due immediately after the completion of services.</li>
          <li>Cancellations must be made at least 24 hours in advance.</li>
          <li>We are not responsible for any damage to items not disclosed at the time of service.</li>
        </ul>
      </section>
      <footer className="text-center text-green-500 font-semibold text-lg">
        <p>Thank you for choosing Excillents!</p>
      </footer>
    </div>
  );
};

export default TermsCompo;
