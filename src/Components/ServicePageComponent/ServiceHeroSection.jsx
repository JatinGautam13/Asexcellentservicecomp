import React from "react";
import { Link } from 'react-router-dom'; // Import Link for navigation

function ServiceHeroSection() {
  return (
    <div className="px-6 flex flex-1 justify-center py-2">
      <div className="layout-content-container flex flex-col max-w-[100%] flex-1">
        <div className="@container">
          <div className="@[480px]:p-4">
            <div 
              className="flex min-h-[350px] sm:min-h-[600px] flex-col gap-4 sm:gap-6 bg-cover bg-center bg-no-repeat @[480px]:gap-8 @[480px]:rounded-xl items-start justify-end px-4 pb-8 sm:pb-10 @[480px]:px-10"
              style={{
                backgroundImage: "linear-gradient(rgba(0, 0, 0, 0.1) 0%, rgba(0, 0, 0, 0.4) 100%), url('https://www.cleansweepofamerica.com/wp-content/uploads/2024/04/personal-housekeeping-content-01.jpg')",
                backgroundSize: "cover", // Ensures the image covers the entire container
                backgroundPosition: "center", // Centers the image
              }}
            >
              <div className="flex flex-col gap-2 text-left text-center mb-[18%] ml-0 sm:ml-2">
                <h1 className="text-white text-3xl sm:text-4xl font-black leading-tight tracking-[-0.033em] @[480px]:text-5xl @[480px]:font-black @[480px]:leading-tight @[480px]:tracking-[-0.033em]">
                  A cleaning service that you can trust
                </h1>
                <h2 className="text-white text-sm sm:text-base font-normal leading-normal">
                  We're a team of expert cleaners who are dedicated to making your home or office spotless. We use eco-friendly products and the latest cleaning techniques to ensure your space is healthy and hygienic.
                </h2>
                <Link to="/booking">
                  <button className=" ml-24 sm:ml-[46%] flex min-w-[84px] max-w-[130px] cursor-pointer items-center justify-center overflow-hidden rounded-full h-8 sm:h-10 px-4 sm:px-5 bg-[#19a2e6] text-slate-50 text-sm sm:text-base font-bold leading-normal tracking-[0.015em]">
                    <span className="truncate">Get started</span>
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ServiceHeroSection;
