import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css"; // Import AOS styles

const LocationInfo = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: "ease-in-out",
      once: true,
    });
  }, []);

  return (
    <section className="bg-black py-16 px-4 sm:px-6 lg:px-8">
      {/* Section Heading */}
      <div className="max-w-6xl mx-auto text-center mb-12">
        <h2
          className="text-4xl font-bold text-[#a45731] mb-4"
          data-aos="fade-up"
        >
          Discover Our Location
        </h2>
        <p
          className="text-lg text-gray-300 max-w-3xl mx-auto"
          data-aos="fade-up"
          data-aos-delay="200"
        >
          Experience the perfect blend of indulgence and comfort in our Hinckley
          dessert parlour.
        </p>
      </div>

      {/* Content Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
        {/* Left Side (Image) */}
        <div data-aos="fade-right">
          <img
            src="/hero.jpeg"
            alt="Dessert Parlour"
            className="w-full h-[400px] object-cover rounded-lg shadow-lg"
          />
        </div>

        {/* Right Side (Text) */}
        <div className="text-center md:text-left" data-aos="fade-left">
          <h3 className="text-2xl font-semibold text-[#a45731] mb-4">
            Located in Hinckley, Leicestershire
          </h3>
          <p className="text-lg text-white mb-6">Opened August 2024</p>
          <p className="text-base text-gray-300 mb-4">
            Nestled in the heart of Hinckley, Leicestershire, Chocoholics
            Desserts opened its doors in August 2024 with a single mission: to
            create an indulgent wonderland where chocolate lovers can experience
            pure bliss.
          </p>
          <p className="text-base text-gray-300">
            Our luxurious dessert parlour is more than just a place to satisfy
            your sweet tooth – it’s a destination where memories are made and
            chocolate dreams become reality.
          </p>
        </div>
      </div>
    </section>
  );
};

export default LocationInfo;
