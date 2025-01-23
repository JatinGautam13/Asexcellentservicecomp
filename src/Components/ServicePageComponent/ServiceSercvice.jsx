import React, { useState } from "react";

const servicesData = {
  Residential: [
    { name: "Standard Cleaning", image: "https://cdn.usegalileo.ai/sdxl10/03865e85-57e8-4c9b-b659-a2a1aef27f48.png" },
    { name: "Deep Cleaning", image: "https://cdn.usegalileo.ai/sdxl10/71acca4b-4fce-4341-976c-412e5a9838fb.png" },
    { name: "Eco-friendly Cleaning", image: "https://cdn.usegalileo.ai/sdxl10/fd8c7e68-7927-4f9a-9828-5bbce607901a.png" },
    { name: "Post-construction Cleaning", image: "https://cdn.usegalileo.ai/sdxl10/5ebfd3ad-39ab-49db-8938-2ba7405d10ae.png" },
    { name: "Vacation Rental Cleaning", image: "https://cdn.usegalileo.ai/sdxl10/8c0e510d-2a34-417f-850a-7ff3499985f1.png" },
    { name: "Window Cleaning", image: "https://cdn.usegalileo.ai/sdxl10/7e569b09-1ed0-49bf-be37-315d7017291e.png" },
    { name: "Appliance Cleaning", image: "https://cdn.usegalileo.ai/sdxl10/ac603023-8b64-41be-94a1-9998760cefc4.png" },
    { name: "Tile Cleaning", image: "https://cdn.usegalileo.ai/sdxl10/bff1fc1e-22b6-4fd7-ba10-2c30898a3746.png" },
    { name: "facade cleaning", image: "https://cdn.usegalileo.ai/sdxl10/f2799e7b-32ec-4132-a6dc-f92c1762e9dd.png" },
    { name: "Carpet Cleaning", image: "https://cdn.usegalileo.ai/sdxl10/5885d5ea-4d7f-4479-977f-25bd0e4a433f.png" },
  ],
  Commercial: [
    { name: "Office Cleaning", image: "https://static.vecteezy.com/system/resources/previews/010/718/047/original/cleaning-team-with-professional-equipment-cleaning-office-vector.jpg" },
    { name: "Warehouse Cleaning", image: "https://static.vecteezy.com/system/resources/previews/006/900/613/non_2x/delivery-man-concept-free-vector.jpg" },
    { name: "Pest control", image: "https://3.bp.blogspot.com/-i2GzHPsHm80/WPp2DkpwfkI/AAAAAAAAAEI/7LTTEcNuufElFCKSfX3r6XBnej92BU2FgCLcB/s1600/Fotolia_118999877_Subscription_Monthly_M.jpg" },

    // Add more services here...
  ],
  MoveInOut: [
    { name: "Move-in Cleaning", image: "https://th.bing.com/th/id/OIP.oVCAXOEXInQA8rTKHMV5fQAAAA?rs=1&pid=ImgDetMain" },
    { name: "Move-out Cleaning", image: "https://hometechhacker.com/wp-content/uploads/2022/01/Moving-Out-Graphic-1024x669.jpg" },
    // Add more services here...
  ],
};

const categoryIcons = {
  Residential: "https://th.bing.com/th/id/OIP.6Q6M1ODrAvlhM3qpF3y4TwHaHD?rs=1&pid=ImgDetMain",
  Commercial: "https://th.bing.com/th/id/R.cb7fff6538ef26946b4927f8066ed13d?rik=%2bQAMIFWSTbkJOw&riu=http%3a%2f%2fclipartmag.com%2fimages%2fapartment-building-clipart-30.png&ehk=AQEG1fG4AETsky%2fMSrSKvc6i8z6Uib6H5SCHYVUasEg%3d&risl=&pid=ImgRaw&r=0",
  MoveInOut: "https://png.pngtree.com/png-vector/20221113/ourmid/pngtree-box-truck-delivery-png-image_6443879.png",
}

function ServicesSection() {
  const [activeTab, setActiveTab] = useState("Residential");

  return (
    <div className="services-section px-4">
      {/* Heading */}
      <h2 className="text-3xl font-bold text-center  mb-6 sm:text-4xl">Our Services</h2>

      {/* Tabs */}
      <div className="tabs flex justify-center space-x-2 sm:space-x-4 border-b pb-2 mb-4">
        {Object.keys(servicesData).map((category) => (
          <button
            key={category}
            className={`flex flex-col items-center px-2 py-2 sm:px-4 sm:py-2 ${
              activeTab === category
                ? "border-b-2 border-blue-500 font-bold"
                : "text-gray-600"
            }`}
            onClick={() => setActiveTab(category)}
          >
            {/* Category Icon */}
            <img
              src={categoryIcons[category]}
              alt={`${category} Icon`}
              className="w-9 h-9 mb-1 sm:w-11 sm:h-10 rounded-lg"
            />
            {/* Category Name */}
            {category === "MoveInOut"
              ? "Move-in/Move-out Cleaning"
              : `${category} Cleaning`}
          </button>
        ))}
      </div>

      {/* Services Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-2 sm:gap-4 mb-9">
        {servicesData[activeTab].map((service, index) => (
          <div
            key={index}
            className="service-card flex flex-col items-center text-center border rounded-lg p-2 sm:p-4 shadow hover:shadow-md mb-4"
          >
            <div
              className="service-image w-full h-[20vh] sm:h-[30vh] bg-cover bg-center rounded-lg"
              style={{ backgroundImage: `url(${service.image})` }}
            ></div>
            <h3 className="text-base font-medium mt-2 sm:text-lg">{service.name}</h3>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ServicesSection;
