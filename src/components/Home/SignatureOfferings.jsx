import React from 'react';

const SignatureOfferings = () => {
  return (
    <section className="py-16 bg-black">
      <div className="max-w-screen-xl mx-auto text-center">
        {/* Heading with caramel color */}
        <h2 className="text-3xl font-extrabold text-[#a45731] mb-8 text-[#a45731]">
          Our Signature Offerings
        </h2>
        <p className="text-lg text-white mb-12">What sets us apart from the rest</p>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
          {/* Dubai Chocolate Strawberries */}
          <div className="bg-white p-6 rounded-lg shadow-lg text-center border-4 border-[#a45731] hover:scale-105 transition transform duration-300 ease-in-out">
            <div className="h-48 bg-gray-200 mb-4 flex justify-center items-center">
              <img src="placeholder.svg" alt="Dubai Chocolate Strawberries" className="h-full w-auto object-contain" />
            </div>
            <h3 className="text-xl font-semibold text-[#a45731] mb-2">Dubai Chocolate Strawberries</h3>
            <span className="text-sm text-gray-500 block mb-2">Local Legend</span>
            <p className="text-gray-600">Our signature dessert that has quickly become the talk of Leicestershire</p>
          </div>

          {/* Old School Sprinkle Cake */}
          <div className="bg-white p-6 rounded-lg shadow-lg text-center border-4 border-[#a45731] hover:scale-105 transition transform duration-300 ease-in-out">
            <div className="h-48 bg-gray-200 mb-4 flex justify-center items-center">
              <img src="/placeholder.svg" alt="Old School Sprinkle Cake" className="h-full w-auto object-contain" />
            </div>
            <h3 className="text-xl font-semibold text-[#a45731] mb-2">Old School Sprinkle Cake</h3>
            <span className="text-sm text-[#a45731] block mb-2">Instagram Famous</span>
            <p className="text-gray-600">Artisanal cakes that are as beautiful as they are delicious</p>
          </div>

          {/* Kinda Surprise Waffle */}
          <div className="bg-white p-6 rounded-lg shadow-lg text-center border-4 border-[#a45731] hover:scale-105 transition transform duration-300 ease-in-out">
            <div className="h-48 bg-gray-200 mb-4 flex justify-center items-center">
              <img src="/placeholder.svg" alt="Kinda Surprise Waffle" className="h-full w-auto object-contain" />
            </div>
            <h3 className="text-xl font-semibold text-[#a45731] mb-2">Kinda Surprise Waffle</h3>
            <span className="text-sm text-[#a45731] block mb-2">Always Fresh</span>
            <p className="text-gray-600">Ever-changing menu that celebrates the best of each season</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default SignatureOfferings;
