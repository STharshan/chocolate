import React from 'react';
import { FaBirthdayCake, FaHeart, FaGift, FaBuilding } from 'react-icons/fa';

const PrivateEvents = () => {
  return (
    <section className="bg-black py-16 px-4">
      <div className="max-w-screen-xl mx-auto text-center">
        {/* Heading with caramel color */}
        <h2 className="text-3xl font-extrabold text-[#a45731] mb-8  text-[#a45731]">
          Private Functions & Events
        </h2>
        <p className="text-lg text-white mb-12">Perfect spaces for your special occasions</p>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Children's Parties */}
          <div className="bg-[#f5f5f5] p-6 rounded-lg shadow-lg border-4 border-[#a45731]">
            <div className="flex justify-center mb-4">
              <FaBirthdayCake className="w-16 h-16 text-[#a45731]" />
            </div>
            <h3 className="text-xl font-semibold text-[#a45731]">Children's Parties</h3>
            <p className="text-gray-600">Chocolate-themed celebrations that kids will never forget</p>
          </div>
          
          {/* Date Nights */}
          <div className="bg-[#f5f5f5] p-6 rounded-lg shadow-lg border-4 border-[#a45731]">
            <div className="flex justify-center mb-4">
              <FaHeart className="w-16 h-16 text-[#a45731]" />
            </div>
            <h3 className="text-xl font-semibold text-[#a45731]">Date Nights</h3>
            <p className="text-gray-600">Romantic settings perfect for intimate chocolate experiences</p>
          </div>
          
          {/* Anniversaries */}
          <div className="bg-[#f5f5f5] p-6 rounded-lg shadow-lg border-4 border-[#a45731]">
            <div className="flex justify-center mb-4">
              <FaGift className="w-16 h-16 text-[#a45731]" />
            </div>
            <h3 className="text-xl font-semibold text-[#a45731]">Anniversaries</h3>
            <p className="text-gray-600">Celebrate milestones with our special anniversary packages</p>
          </div>
          
          {/* Corporate Events */}
          <div className="bg-[#f5f5f5] p-6 rounded-lg shadow-lg border-4 border-[#a45731]">
            <div className="flex justify-center mb-4">
              <FaBuilding className="w-16 h-16 text-[#a45731]" />
            </div>
            <h3 className="text-xl font-semibold text-[#a45731]">Corporate Events</h3>
            <p className="text-gray-600">Business meetings with a sweet twist that impresses clients</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default PrivateEvents;
