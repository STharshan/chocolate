import React from 'react';
import { FaCookie, FaSearch, FaBuilding } from 'react-icons/fa'; // Updated to valid icons

const UniqueFeatures = () => {
  return (
    <section className="bg-black py-16 px-4">
      <div className="max-w-screen-xl mx-auto text-center">
        {/* Heading with caramel color */}
        <h2 className="text-3xl font-extrabold text-[#a45731] mb-8 text-[#a45731]">
          What Makes Us Unique
        </h2>
        <p className="text-lg text-white mb-12">The Chocoholics Difference</p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
          {/* Artisanal Quality */}
          <div className="bg-[#f5f5f5] p-6 rounded-lg shadow-lg border-4 border-[#a45731]">
            <div className="flex justify-center mb-4">
              <FaCookie className="w-16 h-16 text-[#a45731]" /> {/* Replaced with FaCookie */}
            </div>
            <h3 className="text-xl font-semibold text-[#a45731]">Artisanal Quality</h3>
            <p className="text-gray-600">
              Every dessert is handcrafted with premium Belgian chocolate and finest ingredients
            </p>
          </div>

          {/* Transparent Process */}
          <div className="bg-[#f5f5f5] p-6 rounded-lg shadow-lg border-4 border-[#a45731]">
            <div className="flex justify-center mb-4">
              <FaSearch className="w-16 h-16 text-[#a45731]" />
            </div>
            <h3 className="text-xl font-semibold text-[#a45731]">Transparent Process</h3>
            <p className="text-gray-600">
              Watch your desserts being made fresh, ensuring quality and creating excitement
            </p>
          </div>

          {/* Versatile Spaces */}
          <div className="bg-[#f5f5f5] p-6 rounded-lg shadow-lg border-4 border-[#a45731]">
            <div className="flex justify-center mb-4">
              <FaBuilding className="w-16 h-16 text-[#a45731]" />
            </div>
            <h3 className="text-xl font-semibold text-[#a45731]">Versatile Spaces</h3>
            <p className="text-gray-600">
              From intimate dates to large celebrations, we accommodate every occasion perfectly
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default UniqueFeatures;
