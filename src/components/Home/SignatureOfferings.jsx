import React, { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

// 🔶 MobileGlowVideo for mobile-only glow animation
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
      className={`transition-all duration-500 ease-out w-full h-full 
        ${glow ? "shadow-[0_0_40px_#A45731] scale-105" : "shadow-lg"}
        rounded-lg overflow-hidden`}
    >
      <video
        src={src}
        autoPlay
        muted
        loop
        playsInline
        className="w-full h-full object-cover"
      />
    </div>
  );
};

const SignatureOfferings = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: "ease-in-out",
      once: true,
    });
  }, []);

  const offerings = [
    {
      title: "Dubai Chocolate Strawberries",
      subtitle: "Local Legend",
      description:
        "Our signature dessert that has quickly become the talk of Leicestershire",
      videoSrc: "/dubaichocolate.mp4",
      delay: "400",
    },
    {
      title: "Old School Sprinkle Cake",
      subtitle: "Instagram Famous",
      description: "Artisanal cakes that are as beautiful as they are delicious",
      videoSrc: "/oldschool.mp4",
      delay: "600",
    },
    {
      title: "Kinda Surprise Waffle",
      subtitle: "Always Fresh",
      description:
        "Ever-changing menu that celebrates the best of each season",
      videoSrc: "/Kindasurprisewaffle.mp4",
      delay: "800",
    },
    {
      title: "Ferrero Rocher cookie dough",
      subtitle: "Ferrero Rocher",
      description:
        "Warm, Nutty Chocolate, topped with Ferreros",
      videoSrc: "/choco.mp4",
      delay: "1000",
    },
  ];

  return (
    <section
      className="py-16 bg-white dark:bg-black transition-colors duration-300 scroll-m-10"
      id="signature"
    >
      <div className="max-w-screen-xl mx-auto text-center px-4 sm:px-6 lg:px-8">
        <h2
          className="text-3xl font-extrabold text-[#a45731] mb-8"
          data-aos="fade-up"
        >
          Our Signature Offerings
        </h2>
        <p
          className="text-lg text-black dark:text-gray-300 mb-12"
          data-aos="fade-up"
          data-aos-delay="200"
        >
          What sets us apart from the rest
        </p>

        {/* Grid for 4 videos */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[350px]">
          {offerings.map((offering, index) => (
            <div
              key={index}
              className={`relative transform transition-all duration-300 ease-in-out hover:scale-105 
                ${
                  index === 0 || index === offerings.length - 1
                    ? "md:col-span-2 md:row-span-1"
                    : "md:col-span-1"
                }`}
              data-aos="fade-up"
              data-aos-delay={offering.delay}
            >
              {/* Mobile responsive glow video */}
              <MobileGlowVideo src={offering.videoSrc} />

              {/* Text overlay */}
              <div className="absolute bottom-0 left-0 right-0 p-6 text-left bg-gradient-to-t from-black/70 via-black/30 to-transparent rounded-b-lg">
                <h3 className="text-2xl font-bold text-white drop-shadow-md">
                  {offering.title}
                </h3>
                <span className="text-sm text-gray-300 block mb-1">
                  {offering.subtitle}
                </span>
                <p className="text-gray-200 text-sm drop-shadow-md">
                  {offering.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SignatureOfferings;
