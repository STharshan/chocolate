import React from "react";

const WhyCall = () => {
  return (
    <section className="bg-black py-16 px-8 text-center">
      <h2 className="text-white text-3xl md:text-4xl font-bold mb-4">
        Experience the Chocoholics Difference
      </h2>
      <p className="text-gray-400 text-lg mb-6">
        Join us for an unforgettable journey through pure chocolate bliss
      </p>
      <div className="flex justify-center gap-4">
        <a
          href="#"
          className="bg-white text-[#346909] py-2 px-6 rounded-md text-lg font-semibold transition hover:bg-gray-400 hover:text-white"
        >
          Book Your Visit
        </a>
        <a
          href="#"
          className="bg-transparent border-2 border-white text-white py-2 px-6 rounded-md sm:text-lg text-sm  sm:font-semibold transition hover:bg-white hover:text-black"
        >
          Download First-Visit Voucher
        </a>
      </div>
    </section>
  );
};

export default WhyCall;
