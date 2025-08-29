import React from "react";

const CallToAction = () => {
  return (
    <section className="bg-black py-16 px-8 text-center ">
      <h2 className="text-[#a45731] text-3xl md:text-4xl font-bold mb-4">
        Ready to Experience the Magic?
      </h2>
      <p className="text-gray-400 text-lg mb-6">
        Visit Leicestershire's sweetest destination and make your chocolate
        dreams come true
      </p>
      <div className="flex justify-center gap-4">
        <a
          href="#"
          className="bg-white text-[#346909] py-2 px-6 rounded-md text-lg font-semibold transition hover:bg-[#a45731] hover:text-white"
        >
          Visit Us Today
        </a>
        <a
          href="#"
          className="bg-transparent border-2 border-white text-white py-2 px-6 rounded-md text-lg font-semibold transition hover:bg-white hover:text-[#346909]"
        >
          Download Voucher
        </a>
      </div>
    </section>
  );
};

export default CallToAction;
