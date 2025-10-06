import React, { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css"; // Import AOS styles

// 🔶 Reusable glowing image component (mobile only)
const MobileGlowImage = ({ src, alt }) => {
  const [isMobile, setIsMobile] = useState(false);
  const [glow, setGlow] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 640);
    checkMobile(); // run once
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  const handleTouch = () => {
    if (isMobile) {
      setGlow(true);
      setTimeout(() => setGlow(false), 400); // ease-out
    }
  };

  return (
    <img
      src={src}
      alt={alt}
      onTouchStart={handleTouch}
      className={`w-full h-[400px] object-cover rounded-lg transition-all duration-500 ease-out 
        ${glow ? "shadow-[0_0_40px_#A45731] scale-105" : "shadow-lg"}`}
    />
  );
};

const LocationInfo = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: "ease-in-out",
      once: true,
    });
  }, []);

  return (
    <section className="bg-white dark:bg-black py-20 px-4 sm:px-6 lg:px-8 transition-colors duration-300">
      {/* Section Heading */}
      <div className="max-w-6xl mx-auto text-center mb-12">
        <h2
          className="text-5xl font-bold text-[#a45731] mb-6"
          data-aos="fade-up"
        >
          Our History
        </h2>
        <p
          className="text-xl text-gray-700 dark:text-gray-300 max-w-3xl mx-auto"
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
          <MobileGlowImage src="/hero.jpeg" alt="Our History" />
        </div>

        {/* Right Side (Text) */}
        <div className="text-center md:text-left" data-aos="fade-left">
          <h3 className="text-3xl font-semibold text-[#a45731] mb-4">
            Located in Hinckley, Leicestershire
          </h3>
          <p className="text-lg text-black dark:text-gray-300 mb-6">
            Opened August 2024
          </p>
          <p className="text-base text-gray-700 dark:text-gray-400 mb-4">
            Nestled in the heart of Hinckley, Leicestershire, Chocoholics
            Desserts opened its doors in August 2024 with a single mission: to
            create an indulgent wonderland where chocolate lovers can experience
            pure bliss.
          </p>
          <p className="text-base text-gray-700 dark:text-gray-400">
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
