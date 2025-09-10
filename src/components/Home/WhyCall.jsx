import React from "react";

const WhyCall = () => {
  return (
    <section className="bg-black py-16 px-8 text-center ">
      <h2 className="text-[#a45731] text-3xl md:text-4xl font-bold mb-4">
        Experience the Chocoholics Difference
      </h2>
      <p className="text-white text-lg mb-6">
        Join us for an unforgettable journey through pure chocolate bliss
      </p>
      <div className="flex justify-center gap-4">
        <a
          href="#"
          className="bg-[#a45731] text-white py-2 px-6 rounded-md text-lg font-semibold transition hover:bg-white hover:text-[#a45731]"
        >
          Book Your Visit
        </a>
        <a
          href="#"
          className="bg-transparent border-2 border-white text-white py-2 px-6 rounded-md sm:text-lg text-sm sm:font-semibold transition hover:bg-white hover:text-[#a45731]"
        >
          Download First-Visit Voucher
        </a>
      </div>
    </section>
  );
};

export default WhyCall;
