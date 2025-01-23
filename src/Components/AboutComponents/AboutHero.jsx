import React from "react";
import { Link } from 'react-router-dom'; // Import Link for navigation

function AboutHeroSection() {
  return (
    <div className="px-6 flex flex-1 justify-center py-2">
      <div className="layout-content-container flex flex-col max-w-[100%] flex-1">
        <div className="@container">
          <div className="@[480px]:p-4">
            <div
              className="flex min-h-[300px] sm:min-h-[600px] flex-col gap-4 sm:gap-6 bg-cover bg-center bg-no-repeat @[480px]:gap-8 @[480px]:rounded-xl items-start justify-end px-4 pb-8 sm:pb-10 @[480px]:px-10"
              style={{
                backgroundImage:
                  "linear-gradient(rgba(0, 0, 0, 0.1) 0%, rgba(0, 0, 0, 0.4) 100%), url('http://www.erieinsurance.com/-/media/images/blog/articlephotos/2020/business-cleaning-large.ashx')",
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            >
              {/* Text and Button Content */}
              <div className="flex flex-col gap-4 text-left text-white mb-[2%] ml-0 sm:ml-10">
                {/* Title */}
                <h1 className="text-white text-3xl sm:text-4xl font-bold leading-tight tracking-[-0.033em] @[480px]:text-5xl @[480px]:font-black @[480px]:leading-tight @[480px]:tracking-[-0.033em]">
                  About us
                </h1>

                {/* Subtitle */}
                <p className="text-white text-sm sm:text-base font-light sm:pr-48 leading-normal">
                  We understand that keeping your home clean and comfortable can be challenging with a busy schedule. At CleanSweep, we are committed to providing you with the support you need to maintain a spotless and organized space. Whether it’s a one-time deep clean to refresh your home, weekly upkeep to stay on top of chores, bi-weekly visits for a balanced routine, or monthly maintenance for long-term care, we’ve got you covered. Our expert team uses eco-friendly products and proven cleaning techniques to ensure your home is not only sparkling clean but also safe and healthy for your family. Our goal is to take the burden of cleaning off your shoulders, giving you the freedom to focus on what truly matters—spending quality time with loved ones and enjoying the things that bring you happiness.
                </p>

                {/* Button */}
                <Link to="/booking">
                  <button className="flex min-w-[100px] sm:min-w-[120px] max-w-[150px] sm:max-w-[180px] cursor-pointer items-center justify-center overflow-hidden rounded-full h-8 sm:h-10 px-4 sm:px-6 @[480px]:h-12 @[480px]:px-7 bg-[#19a2e6] text-slate-50 text-sm font-bold leading-normal tracking-[0.015em] @[480px]:text-base @[480px]:font-bold @[480px]:leading-normal @[480px]:tracking-[0.015em]">
                    Book now
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

export default AboutHeroSection;
