import React from 'react';

const SignatureOfferings = () => {
  return (
    <section className="py-16 bg-black">
      <div className="max-w-screen-xl mx-auto text-center">
        <h2 className="text-3xl font-extrabold text-brown-700 mb-8 text-white">Our Signature Offerings</h2>
        <p className="text-lg text-gray-400 mb-12">What sets us apart from the rest</p>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
          <div className="bg-white p-6 rounded-lg shadow-lg text-center">
            <div className="h-48 bg-gray-200 mb-4 flex justify-center items-center">
              <img src="placeholder.svg" alt="Death by Chocolate" className="h-full w-auto object-contain" />
            </div>
            <h3 className="text-xl font-semibold text-brown-700 mb-2">Death by Chocolate</h3>
            <span className="text-sm text-gray-500 block mb-2">Local Legend</span>
            <p className="text-gray-600">Our signature dessert that has quickly become the talk of Leicestershire</p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-lg text-center">
            <div className="h-48 bg-gray-200 mb-4 flex justify-center items-center">
              <img src="/placeholder.svg" alt="Towering Sundaes" className="h-full w-auto object-contain" />
            </div>
            <h3 className="text-xl font-semibold text-brown-700 mb-2">Towering Sundaes</h3>
            <span className="text-sm text-blue-500 block mb-2">Instagram Famous</span>
            <p className="text-gray-600">Artisanal sundaes that are as beautiful as they are delicious</p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-lg text-center">
            <div className="h-48 bg-gray-200 mb-4 flex justify-center items-center">
              <img src="/placeholder.svg" alt="Seasonal Specialties" className="h-full w-auto object-contain" />
            </div>
            <h3 className="text-xl font-semibold text-brown-700 mb-2">Seasonal Specialties</h3>
            <span className="text-sm text-green-500 block mb-2">Always Fresh</span>
            <p className="text-gray-600">Ever-changing menu that celebrates the best of each season</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default SignatureOfferings;
