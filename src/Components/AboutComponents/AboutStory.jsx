import React from "react";

function OurStorySection() {
  return (
    <div className="px-4 sm:px-6 py-8 sm:py-12 flex justify-center items-center bg-gray-50">
      <div className="layout-content-container max-w-[100%] flex flex-col gap-8">
        
        {/* Title and Description */}
        <div className="text-center">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-4">Our Story</h2>
        </div>
        
        {/* First Section */}
        <div className="flex flex-col md:flex-row items-center gap-4 sm:gap-6">
          <div className="md:w-1/2 w-full">
            <img
              src="src\assets\Gemini_Generated_Image_t1ecu0t1ecu0t1ec.jpg"
              alt="Sunil Kumar Vaid"
              className="w-full h-[40vh] sm:h-[30vw] object-cover rounded-lg shadow-lg"
            />
          </div>
          <div className="md:w-1/2 w-full">
            <p className="text-base sm:text-[150%] text-black-600 leading-relaxed">
              On November 24, 2021, amidst the bustling streets and dynamic energy of Delhi NCR, a dream was born. Sunil Kumar Vaid, fueled by an unwavering passion for cleanliness and a vision of <b>Excellent Services</b>, founded <b>Excellent Services</b>. This marked the beginning of a journey to transform spaces and elevate the standard of cleaning services in the region.
            </p>
          </div>
        </div>
        
        {/* Second Section */}
        <div className="flex flex-col md:flex-row items-center gap-4 sm:gap-6">
          <div className="md:w-1/2 order-2 md:order-1 w-full">
            <p className="text-base sm:text-[150%] text-black-600 leading-relaxed">
              <b>Excellent Services</b> started with a small, dedicated team whose mission was simple yet ambitious: to ensure that every home, office, and commercial space in Delhi NCR gleamed with perfection. Whether it was scrubbing a cozy living room, polishing office furniture, or cleaning expansive warehouses, no task was too big or too small. Every job was approached with meticulous attention to detail and a commitment to exceeding client expectations.
            </p>
          </div>
          <div className="md:w-1/2 order-1 md:order-2 w-full">
            <img
              src="https://img.freepik.com/free-vector/cleaning-service-concept-illustration_114360-12701.jpg"
              alt="Dedicated team"
              className="w-full h-[40vh] sm:h-[30vw] object-cover rounded-lg shadow-lg"
            />
          </div>
        </div>
        
        {/* Third Section */}
        <div className="flex flex-col md:flex-row items-center gap-4 sm:gap-6">
          <div className="md:w-1/2 w-full">
            <img
              src="https://static.vecteezy.com/system/resources/thumbnails/027/078/415/small_2x/worker-washing-office-floor-with-cleaning-machine-generative-ai-photo.jpg"
              alt="Premium cleaning service"
              className="w-full h-[40vh] sm:h-[30vw] object-cover rounded-lg shadow-lg"
            />
          </div>
          <div className="md:w-1/2 w-full">
            <p className="text-base sm:text-[150%] text-black-600 leading-relaxed">
              As word of their exceptional services spread, <b>Excellent Services</b> quickly gained a reputation for reliability, quality, and customer satisfaction. The team’s dedication to transforming every space they touched won them the loyalty and trust of countless clients. From residential apartments to large corporate offices, their expertise covered every cleaning need imaginable.
            </p>
          </div>
        </div>
        
        {/* Fourth Section */}
        <div className="flex flex-col md:flex-row items-center gap-4 sm:gap-6">
          <div className="md:w-1/2 order-2 md:order-1 w-full">
            <p className="text-base sm:text-[150%] text-black-600 leading-relaxed">
              Today, <b>Excellent Services</b> stands proud, having delivered over 10,000 premium cleaning services to satisfied clients throughout Delhi NCR. Their story is one of growth, dedication, and relentless pursuit of excellence. Every satisfied client is a testament to their unwavering commitment to quality and customer happiness.
            </p>
          </div>
          <div className="md:w-1/2 order-1 md:order-2 w-full">
            <img
              src="https://www.shutterstock.com/image-photo/portrait-happy-excited-smiling-young-600nw-2471642495.jpg"
              alt="Growth and excellence"
              className="w-full h-[40vh] sm:h-[30vw] object-cover rounded-lg shadow-lg"
            />
          </div>
        </div>
        
        {/* Conclusion */}
        <div className="">
          <p className="text-base sm:text-[150%] text-black-600 leading-relaxed mt-8">
            Our story is not just about cleaning spaces; it's about creating environments where people can thrive, live comfortably, and work efficiently. At <b>Excellent Services</b>, we believe that a clean space is the foundation of a better life, and we are dedicated to making that belief a reality for every client we serve.
          </p>
        </div>
      </div>
    </div>
  );
}

export default OurStorySection;
