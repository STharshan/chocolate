// File: WhyExperience.jsx
import React from 'react';

const WhyExperience = () => {
  return (
    <div className="bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-10">
          {/* Master Chocolatiers Section */}
          <div className="bg-white p-6 sm:p-8 rounded-2xl shadow-lg border-4 border-[#a45731]">
            <h2 className="text-2xl sm:text-3xl font-semibold text-[#a45731] mb-2">
              Master Chocolatiers
            </h2>
            <button className="text-sm sm:text-base text-[#a45731] mb-4">
              Live Chocolate Making
            </button>

            {/* Keep video same ratio on all devices (16:9) */}
            <div className="mb-6 rounded-xl overflow-hidden bg-black aspect-video">
              <video
                src="/choco.mp4"
                autoPlay
                muted
                loop
                playsInline
                preload="metadata"
                className="w-full h-full object-cover"
              />
            </div>

            <p className="text-base leading-7 text-gray-700">
              Watch our skilled chocolatiers work their magic before your eyes. Every creation is
              crafted with precision, passion, and the finest Belgian chocolate.
            </p>
          </div>

          {/* Interactive Experience Section */}
          <div className="bg-white p-6 sm:p-8 rounded-2xl shadow-lg border-4 border-[#a45731]">
            <h2 className="text-2xl sm:text-3xl font-semibold text-[#a45731] mb-2">
              Interactive Experience
            </h2>
            <button className="text-sm sm:text-base text-[#a45731] mb-4">
              Watch &amp; Learn
            </button>

            {/* Same ratio (16:9) */}
            <div className="mb-6 rounded-xl overflow-hidden bg-black aspect-video">
              <video
                src="/choco.mp4"
                autoPlay
                muted
                loop
                playsInline
                preload="metadata"
                className="w-full h-full object-cover"
              />
            </div>

            <p className="text-base leading-7 text-gray-700">
              Our open kitchen concept lets you witness the artistry behind every dessert, making
              your visit both delicious and educational.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhyExperience;
