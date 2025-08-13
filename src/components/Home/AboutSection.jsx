import React from "react";

const AboutSection = () => {
  return (
    <section id="about" className="relative bg-black text-white min-h-screen px-4 py-12 flex flex-col items-center">
      {/* Faint Background Logo */}
      <div className="absolute inset-0 flex justify-center items-center pointer-events-none opacity-10">
        <img
          src="/logo.png"// logo 
          alt="Chocoholics Desserts Logo"
          className="max-w-xl w-full"
          style={{ filter: "brightness(0) invert(1)" }}
        />
      </div>

      {/* Content Container */}
      <div className="relative max-w-4xl text-center space-y-6 z-10">
        <img
          src="/logo.png"
          alt="Chocoholics Desserts Logo"
          className="mx-auto w-40 md:w-52"
        />

        <p className="font-semibold text-xl md:text-2xl">About Chocoholics Desserts</p>

        <p className="text-sm md:text-lg leading-relaxed">
          Welcome to Chocoholics Desserts – Where Chocolate Dreams Come True
          <br />
          Nestled in the heart of Hinckley, Leicestershire, Chocoholics Desserts opened its doors in August 2024 with a single mission: to create an indulgent wonderland where chocolate lovers can experience pure bliss. Our luxurious dessert parlour is more than just a place to satisfy your sweet tooth – it’s a destination where memories are made and chocolate dreams become reality.
        </p>

        <p className="font-semibold text-lg md:text-2xl mt-6">Our Passion</p>
        <p className="text-sm md:text-lg leading-relaxed">
          Step into our world and watch our master chocolatiers work their magic before your eyes. From molten lava cakes that ooze with rich Belgian chocolate to towering sundaes adorned with artisanal garnishes, every creation is crafted with precision and passion. Our signature "Death by Chocolate" has quickly become a local legend, while our seasonal specialties keep our menu fresh and exciting throughout the year.
        </p>

        <p className="font-semibold text-lg md:text-2xl mt-6">Your Experience</p>
        <p className="text-sm md:text-lg leading-relaxed">
          We’ve designed our space to be the perfect setting for any occasion. Our cozy space, provide an intimate atmosphere for date nights, while our party spaces can accommodate celebrations of all sizes. Young chocolatiers will delight in our chocolate fountain paradise, making every family visit an adventure in sweetness.
        </p>

        <p className="font-semibold text-lg md:text-2xl mt-6">Private Functions</p>
        <p className="text-sm md:text-lg leading-relaxed">
          Whether you’re planning a birthday celebration, marking an anniversary, or hosting a business meeting with a twist, our private function spaces offer the perfect backdrop. We specialize in:
          <br />
          Children’s chocolate-themed parties<br />
          Date Nights<br />
          Anniversary celebrations<br />
          Corporate events and meetings<br />
          Special occasions
        </p>

        <p className="font-semibold text-lg md:text-2xl mt-6">Visit Us</p>
        <p className="text-sm md:text-lg leading-relaxed">
          Make your chocolate dreams come true by visiting Leicestershire’s sweetest destination. Download your first-visit discount voucher from our website at www.chocoholicsdesserts.co.uk and join us for an unforgettable experience where happiness is always served with a side of chocolate sauce.
          <br />
          Experience the magic of Chocoholics Desserts – where every visit is a journey through pure chocolate bliss.
        </p>
      </div>
    </section>
  );
};

export default AboutSection;
