import React from "react";
import { FaArrowRightLong } from "react-icons/fa6";
import { Link } from 'react-router-dom';

const servicesData = [
  {
    title: "Standard Cleaning",
    description: "Great for recurring cleanings",
    image: "https://cdn.usegalileo.ai/sdxl10/508563f9-3b26-4420-9cdb-bd34466bd1ff.png", // Replace with your actual image URL
  },
  {
    title: "Deep Cleaning",
    description: "Best for first-time customers",
    image: "https://cdn.usegalileo.ai/sdxl10/fcd7fd7e-fa9e-43dd-817b-ca6571fdf83d.png", // Replace with your actual image URL
  },
  {
    title: "Move-in/out Cleaning",
    description: "Perfect for moving in or out",
    image: "https://cdn.usegalileo.ai/sdxl10/6f71d033-4865-4d7c-bca7-93ead5566c96.png", // Replace with your actual image URL
  },
  {
    title: "Post Construction Cleaning",
    description: "Designed for new construction",
    image: "https://cdn.usegalileo.ai/sdxl10/c308a7c5-9a27-40ef-83d1-d096f29bebd4.png", // Replace with your actual image URL
  },
];

const Services = () => {
  return (
    <section className="px-4 sm:px-10 py-10 sm:py-20">
      <h2 className="text-center text-2xl sm:text-3xl font-bold text-gray-800 mb-6 sm:mb-10">
        Our Services
      </h2>
      <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-6">
        {servicesData.map((service, index) => (
          <div
            key={index}
            className="flex flex-col bg-white rounded-lg p-4 hover:shadow-lg transition-shadow"
          >
            <img
              src={service.image}
              alt={service.title}
              className="w-full h-40 sm:h-45 object-cover rounded-lg mb-4"
            />
            <h3 className="text-lg font-semibold text-gray-800">{service.title}</h3>
            <p className="text-sm text-gray-500 mt-2">
              {service.description}
            </p>
          </div>
        ))}
      </div>
      <div className="mt-8 flex justify-end ">
        <Link to="/services">
          <button className="flex items-center justify-center rounded-full h-10 sm:h-12 px-10 bg-[#19a2e6] text-white text-sm sm:text-base font-bold leading-normal tracking-wide active:scale-95">
            <span className="flex items-center gap-2">
              All Services <FaArrowRightLong className="text-lg" />
            </span>
          </button>
        </Link>
      </div>
    </section>
  );
};

export default Services;
