import React from 'react';

const WhyExperience = () => {
  return (
    <div className='bg-black'>
      <div className="container mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Master Chocolatiers Section */}
          <div className="bg-white p-6 rounded-lg shadow-lg border-4 border-[#a45731]">
            <h2 className="text-2xl font-semibold text-[#a45731] mb-4">Master Chocolatiers</h2>
            <button className="text-sm text-[#a45731] mb-4">Live Chocolate Making</button>
           <div className="mb-4 rounded-md overflow-hidden bg-gray-200 aspect-video">
              <video
                src="/choco.mp4"
                autoPlay
                muted
                loop
                playsInline
                preload="metadata"
                className="w-full h-full object-contain md:object-cover"
              />
            </div>

            <p className="text-base text-gray-700">
              Watch our skilled chocolatiers work their magic before your eyes. Every creation is crafted with precision, passion, and the finest Belgian chocolate.
            </p>
          </div>

          {/* Interactive Experience Section */}
          <div className="bg-white p-6 rounded-lg shadow-lg border-4 border-[#a45731]">
            <h2 className="text-2xl font-semibold text-[#a45731] mb-4">Interactive Experience</h2>
            <button className="text-sm text-[#a45731] mb-4">Watch & Learn</button>
           <div className="mb-4 rounded-md overflow-hidden bg-gray-200 aspect-video">
              <video
                src="/choco.mp4"
                autoPlay
                muted
                loop
                playsInline
                preload="metadata"
                className="w-full h-full object-contain md:object-cover"
              />
            </div>

            <p className="text-base text-gray-700">
              Our open kitchen concept lets you witness the artistry behind every dessert, making your visit both delicious and educational.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhyExperience;
