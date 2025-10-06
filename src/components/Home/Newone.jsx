import React, { useEffect, useState } from "react";
import { FaCookie, FaSearch, FaBuilding } from "react-icons/fa";
import AOS from "aos";
import "aos/dist/aos.css";

// 🔶 MobileGlowVideo component (only touch-glow on mobile)
const MobileGlowVideo = ({ src }) => {
  const [isMobile, setIsMobile] = useState(false);
  const [glow, setGlow] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 640);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  const handleTouch = () => {
    if (isMobile) {
      setGlow(true);
      setTimeout(() => setGlow(false), 400);
    }
  };

  return (
    <div
      onTouchStart={handleTouch}
      className={`rounded-xl overflow-hidden transition-all duration-500 ease-out 
        ${glow ? "shadow-[0_0_40px_#A45731] scale-105" : "shadow-lg"}`}
    >
      <video
        src={src}
        autoPlay
        muted
        loop
        playsInline
        preload="metadata"
        className="w-full h-full object-cover aspect-video"
      />
    </div>
  );
};

const UniqueFeatures = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: "ease-in-out",
      once: true,
    });
  }, []);

  const features = [
    {
      icon: <FaCookie className="w-10 h-10 text-[#a45731]" />,
      title: "Artisanal Quality",
      description:
        "Every dessert is handcrafted with premium Belgian chocolate and finest ingredients.",
      aosDelay: "400",
    },
    {
      icon: <FaSearch className="w-10 h-10 text-[#a45731]" />,
      title: "Transparent Process",
      description:
        "Watch your desserts being made fresh, ensuring quality and creating excitement.",
      aosDelay: "600",
    },
    {
      icon: <FaBuilding className="w-10 h-10 text-[#a45731]" />,
      title: "Versatile Spaces",
      description:
        "From intimate dates to large celebrations, we accommodate every occasion perfectly.",
      aosDelay: "800",
    },
  ];

  return (
    <section
      className="bg-white dark:bg-black py-16 px-4 sm:px-6 lg:px-8 transition-colors duration-300"
      id="unique"
    >
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        {/* Left Side - Features */}
        <div data-aos="fade-right">
          <h2 className="text-3xl font-extrabold text-[#a45731] mb-6">
            What Makes Us Unique
          </h2>
          <p
            className="text-lg text-gray-700 dark:text-gray-300 mb-10"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            The Chocoholics Difference
          </p>

          <div className="space-y-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="flex items-start space-x-4"
                data-aos="fade-up"
                data-aos-delay={feature.aosDelay}
              >
                <div className="flex-shrink-0">{feature.icon}</div>
                <div>
                  <h3 className="text-xl font-semibold text-black dark:text-white">
                    {feature.title}
                  </h3>
                  <p className="text-gray-700 dark:text-gray-300">
                    {feature.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right Side - Glow Video */}
        <div data-aos="fade-left">
          <MobileGlowVideo src="/choco.mp4" />
        </div>
      </div>
    </section>
  );
};

export default UniqueFeatures;
