import React from 'react';

const ExperienceSection = () => {
  return (
    <div className="bg-black py-16 px-4 sm:px-6 lg:px-8 ">
      <h2 className="text-3xl font-bold text-center text-[#a45731] mb-8">
        Your Experience
      </h2>
      <p className="text-center text-white mb-16">
        We've designed our space to be the perfect setting for any occasion
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        <div className="bg-white rounded-lg shadow-lg overflow-hidden border-4 border-[#a45731]">
          <div className="bg-[#e0e0e0] h-40"></div>
          <div className="p-6 text-center">
            <h3 className="text-2xl font-semibold text-[#a45731] mb-4">
              Intimate Atmosphere
            </h3>
            <p className="text-gray-600">
              Perfect cozy spaces for romantic date nights and special moments
            </p>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-lg overflow-hidden border-4 border-[#a45731]">
          <div className="bg-[#e0e0e0] h-40"></div>
          <div className="p-6 text-center">
            <h3 className="text-2xl font-semibold text-[#a45731] mb-4">
              Party Spaces
            </h3>
            <p className="text-gray-600">
              Accommodate celebrations of all sizes with our flexible party areas
            </p>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-lg overflow-hidden border-4 border-[#a45731]">
          <div className="bg-[#e0e0e0] h-40"></div>
          <div className="p-6 text-center">
            <h3 className="text-2xl font-semibold text-[#a45731] mb-4">
              Family Paradise
            </h3>
            <p className="text-gray-600">
              Young chocolatiers will delight in our chocolate fountain paradise
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExperienceSection;
