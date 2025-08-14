import React from 'react';
import { FaBirthdayCake, FaHeart, FaGift, FaBuilding } from 'react-icons/fa';

const PrivateEvents = () => {
  return (
    <section className="bg-black py-16 px-4">
      <div className="max-w-screen-xl mx-auto text-center">
        <h2 className="text-3xl font-extrabold text-brown-700 mb-8 text-white">Private Functions & Events</h2>
        <p className="text-lg text-gray-400 mb-12">Perfect spaces for your special occasions</p>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12">
          <div className="bg-orange-50 p-6 rounded-lg shadow-lg">
            <div className="flex justify-center mb-4">
              <FaBirthdayCake className="w-16 h-16 text-brown-700" />
            </div>
            <h3 className="text-xl font-semibold text-brown-700">Children's Parties</h3>
            <p className="text-gray-600">Chocolate-themed celebrations that kids will never forget</p>
          </div>
          
          <div className="bg-orange-50 p-6 rounded-lg shadow-lg">
            <div className="flex justify-center mb-4">
              <FaHeart className="w-16 h-16 text-brown-700" />
            </div>
            <h3 className="text-xl font-semibold text-brown-700">Date Nights</h3>
            <p className="text-gray-600">Romantic settings perfect for intimate chocolate experiences</p>
          </div>
          
          <div className="bg-orange-50 p-6 rounded-lg shadow-lg">
            <div className="flex justify-center mb-4">
              <FaGift className="w-16 h-16 text-brown-700" />
            </div>
            <h3 className="text-xl font-semibold text-brown-700">Anniversaries</h3>
            <p className="text-gray-600">Celebrate milestones with our special anniversary packages</p>
          </div>
          
          <div className="bg-orange-50 p-6 rounded-lg shadow-lg">
            <div className="flex justify-center mb-4">
              <FaBuilding className="w-16 h-16 text-brown-700" />
            </div>
            <h3 className="text-xl font-semibold text-brown-700">Corporate Events</h3>
            <p className="text-gray-600">Business meetings with a sweet twist that impresses clients</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default PrivateEvents;
