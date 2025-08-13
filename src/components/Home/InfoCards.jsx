import React from 'react';
import { FaHeart, FaTrophy, FaStar } from 'react-icons/fa'; // Importing icons from react-icons

const InfoCards = () => {
  return (
    <div className="bg-black py-12">
      <div className="container mx-auto px-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        <div className="bg-white p-6 rounded-lg shadow-lg text-center">
          <FaHeart className="w-16 h-16 text-black mx-auto mb-4" /> {/* Heart Icon */}
          <h2 className="text-2xl font-bold text-black mb-4">About Us</h2>
          <p className="text-base text-[#5F4B3A] mb-4">
            Discover our passion for creating chocolate masterpieces and the story behind our dessert wonderland.
          </p>
          <a
            href="#"
            className="text-black font-semibold hover:text-[#346909] transition duration-300"
          >
            Learn More
          </a>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-lg text-center">
          <FaTrophy className="w-16 h-16 text-black mx-auto mb-4" /> {/* Trophy Icon */}
          <h2 className="text-2xl font-bold text-black mb-4">Why Choose Us</h2>
          <p className="text-base text-[#5F4B3A] mb-4">
            From master chocolatiers to private functions, discover what makes us Leicestershire's sweetest destination.
          </p>
          <a
            href="#"
            className="text-black font-semibold hover:text-[#346909] transition duration-300"
          >
            Discover More
          </a>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-lg text-center">
          <FaStar className="w-16 h-16 text-black mx-auto mb-4" /> {/* Star Icon */}
          <h2 className="text-2xl font-bold text-black mb-4">Customer Reviews</h2>
          <p className="text-base text-[#5F4B3A] mb-4">
            See what our chocolate lovers are saying about their unforgettable experiences with us.
          </p>
          <a
            href="#"
            className="text-black font-semibold hover:text-[#346909] transition duration-300"
          >
            Read Reviews
          </a>
        </div>
      </div>
    </div>
  );
};

export default InfoCards;
