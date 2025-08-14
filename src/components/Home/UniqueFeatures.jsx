import React from 'react';
import { FaCookie, FaSearch, FaBuilding } from 'react-icons/fa'; // Updated to valid icons

const UniqueFeatures = () => {
  return (
    <section className="bg-black py-16 px-4">
      <div className="max-w-screen-xl mx-auto text-center">
        <h2 className="text-3xl font-extrabold text-white mb-8">What Makes Us Unique</h2>
        <p className="text-lg text-white mb-12">The Chocoholics Difference</p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
          <div className="bg-orange-50 p-6 rounded-lg shadow-lg">
            <div className="flex justify-center mb-4">
              <FaCookie className="w-16 h-16 text-brown-700" /> {/* Replaced with FaCookie */}
            </div>
            <h3 className="text-xl font-semibold text-brown-700">Artisanal Quality</h3>
            <p className="text-gray-600">
              Every dessert is handcrafted with premium Belgian chocolate and finest ingredients
            </p>
          </div>

          <div className="bg-orange-50 p-6 rounded-lg shadow-lg">
            <div className="flex justify-center mb-4">
              <FaSearch className="w-16 h-16 text-brown-700" />
            </div>
            <h3 className="text-xl font-semibold text-brown-700">Transparent Process</h3>
            <p className="text-gray-600">
              Watch your desserts being made fresh, ensuring quality and creating excitement
            </p>
          </div>

          <div className="bg-orange-50 p-6 rounded-lg shadow-lg">
            <div className="flex justify-center mb-4">
              <FaBuilding className="w-16 h-16 text-brown-700" />
            </div>
            <h3 className="text-xl font-semibold text-brown-700">Versatile Spaces</h3>
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
