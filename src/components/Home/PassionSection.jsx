import React from "react";

const PassionSection = () => {
  return (
    <section className="bg-black py-16 px-6">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-semibold text-white mb-12">
          Our Passion
        </h2>
        <p className="text-lg text-gray-700 mb-12">
          Watch our master chocolatiers work their magic before your eyes
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Artisanal Creations */}
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h3 className="text-xl font-semibold text-black mb-4">
              Artisanal Creations
            </h3>
            <p className="text-base text-gray-400 mb-6">
              From molten lava cakes that ooze with rich Belgian chocolate to
              towering sundaes adorned with artisanal garnishes, every creation
              is crafted with precision and passion.
            </p>
            <div className="w-full h-64 bg-[#e0e0e0] rounded-md"></div>
          </div>

          {/* Signature Specialties */}
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h3 className="text-xl font-semibold text-black mb-4">
              Signature Specialties
            </h3>
            <p className="text-base text-gray-400 mb-6">
              Our signature "Death by Chocolate" has quickly become a local
              legend, while our seasonal specialties keep our menu fresh and
              exciting throughout the year.
            </p>
            <div className="w-full h-64 bg-[#e0e0e0] rounded-md"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PassionSection;
