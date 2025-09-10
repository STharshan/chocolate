import React from "react";

const LocationInfo = () => {
  return (
    <div className="bg-black px-4 sm:px-6 lg:px-8 py-12">
      <div className="flex flex-col md:flex-row items-center">
        <div className="w-full md:w-1/2 border-4 border-[#a45731] rounded-lg">
          <img
            src="placeholder.svg"
            alt="Location Image"
            className="w-full rounded-lg shadow-lg object-cover"
          />
        </div>
        <div className="mt-6 md:mt-0 md:ml-8 text-center md:text-left">
          {/* Heading with caramel accent */}
          <h2 className="text-3xl font-semibold text-[#a45731] mb-4">
            Located in Hinckley, Leicestershire
          </h2>
          
          {/* Subtext with white for contrast */}
          <p className="text-xl text-white mb-6">
            Opened August 2024
          </p>

          {/* Body text with gray color */}
          <p className="text-base text-gray-400 mb-4">
            Nestled in the heart of Hinckley, Leicestershire, Chochololics Desserts opened its doors in August 2024 with a single mission: to create an indulgent wonderland where chocolate lovers can experience pure bliss.
          </p>
          
          {/* Additional body text with gray color */}
          <p className="text-base text-gray-400">
            Our luxurious dessert parlour is more than just a place to satisfy your sweet tooth – it’s a destination where memories are made and chocolate dreams become reality.
          </p>
        </div>
      </div>
    </div>
  );
};

export default LocationInfo;
