import React from "react";
import { FaRegStar, FaShieldAlt, FaClock, FaLeaf, FaTruck, FaSmile, FaCogs, FaCertificate, FaWallet } from "react-icons/fa";

const benefits = [
  {
    title: "Top-rated professionals",
    description: "4.9 average rating",
    icon: <FaRegStar className="text-bl-500 text-3xl" />,
  },
  {
    title: "Safety and security",
    description: "100% satisfaction guarantee",
    icon: <FaShieldAlt className="text-black-500 text-3xl" />,
  },
  {
    title: "Flexible scheduling",
    description: "24/7 customer support",
    icon: <FaClock className="text-black-500 text-3xl" />,
  },
  {
    title: "Eco-friendly cleaning",
    description: "Eco-friendly supplies",
    icon: <FaLeaf className="text-black-500 text-3xl" />,
  },
  {
    title: "Transparent pricing",
    description: "Simple upfront pricing",
    icon: <FaWallet className="text-black-500 text-3xl" />,
  },
  {
    title: "Reliable & insured",
    description: "Background-checked pros",
    icon: <FaTruck className="text-black-500 text-3xl" />,
  },
  {
    title: "Friendly customer service",
    description: "No hidden fees",
    icon: <FaSmile className="text-black-500 text-3xl" />,
  },
  {
    title: "Personalized experience",
    description: "Customizable services",
    icon: <FaCogs className="text-black-500 text-3xl" />,
  },
  {
    title: "Premium quality",
    description: "Vetted & experienced pros",
    icon: <FaCertificate className="text-black-500 text-3xl" />,
  },
];

const WhyChooseUs = () => {
  return (
    <section className="px-4 sm:px-8 lg:px-16 py-10 lg:py-0">
      <h2 className="text-center text-2xl sm:text-3xl font-bold text-gray-800 mb-6 lg:mb-10">
        Why Choose Us?
      </h2>
      <div className="flex overflow-x-auto space-x-6 scrollbar-hide lg:grid lg:grid-cols-5 lg:gap-8">
        {benefits.map((benefit, index) => (
          <div
            key={index}
            className="flex flex-col border-2 border-gray-100 rounded-lg p-6 flex-shrink-0 w-64 lg:w-auto hover:shadow-lg transition-shadow"
            style={{ minHeight: "220px" }}
          >
            <div className="mb-5">{benefit.icon}</div>
            <h3 className="text-base sm:text-lg font-semibold text-gray-800">
              {benefit.title}
            </h3>
            <p className="text-sm text-gray-500 mt-2">
              {benefit.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default WhyChooseUs;
