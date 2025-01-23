import React from "react";
import "./iinbuild.css";

function AboutTeam() {
  return (
    <div className="px-4 sm:px-6 py-8 sm:py-12 flex justify-center items-center bg-gray-50">
      <div className="layout-content-container max-w-full flex flex-col gap-6 sm:gap-8">
        
        {/* Title and Description */}
        <div className="text-center">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-4">Our Team</h2>
        </div>
        
        {/* Team Image and Video Horizontal Scrolling */}
        <div className="scrolling-wrapper">
          <div className="scrolling-content flex space-x-4 sm:space-x-10">
            {/* Team Images */}
            <div className="flex-none w-[40vw] sm:w-[28vw] h-[50vw] sm:h-[35vw] overflow-hidden rounded-lg shadow-lg">
              <img
                src="\src\assets\AS Excillent Services Team.webp.jpg"
                alt="Dedicated Cleaning Team 1"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="flex-none w-[40vw] sm:w-[28vw] h-[50vw] sm:h-[35vw] overflow-hidden rounded-lg shadow-lg">
              <img
                src="src\assets\AS Excillent Services Team.webp (1).jpg"
                alt="Dedicated Cleaning Team 2"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="flex-none w-[40vw] sm:w-[28vw] h-[50vw] sm:h-[35vw] overflow-hidden rounded-lg shadow-lg">
              <video muted autoPlay loop
                src="src\assets\For any Requirement Contact Us  .mp4"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="flex-none w-[40vw] sm:w-[28vw] h-[50vw] sm:h-[35vw] overflow-hidden rounded-lg shadow-lg">
              <video muted autoPlay loop
                src="src\assets\AQNDvbZOoO0ExgJzvlgelwU2SKYKJH8l95AVPXZ-pSfclavWm0vo51eFMS15g_JucX0efP3zscd_C2ZXN9KH-CUVghMZQBaDvIFbFbk.mp4"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="flex-none w-[40vw] sm:w-[28vw] h-[50vw] sm:h-[35vw] overflow-hidden rounded-lg shadow-lg">
              <video muted autoPlay loop
                src="src\assets\For any Requirement Contact Us  Beyond Cleaning .mp4"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="flex-none w-[40vw] sm:w-[28vw] h-[50vw] sm:h-[35vw] overflow-hidden rounded-lg shadow-lg">
              <video muted autoPlay loop
                src="src\assets\Kitchen CleaningBeyond Cleaning Health Cleaning.mp4"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="flex-none w-[40vw] sm:w-[28vw] h-[50vw] sm:h-[35vw] overflow-hidden rounded-lg shadow-lg">
              <img
                src="https://img.freepik.com/premium-vector/thanks-your-support-handwritten-vector-lettering-help-appreciation-phrase-isolated-white-background-postcard-greeting-card-decorative-calligraphy-gratitude-words-thankfulness-message_198278-8277.jpg?semt=ais_hybrid"
                alt="Dedicated Cleaning Team 7"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutTeam;
