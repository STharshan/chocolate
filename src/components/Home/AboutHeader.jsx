import React, { useEffect, useState } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css'; // Import AOS styles

// ⬇️ MobileGlowImage component
const MobileGlowImage = ({ src, alt }) => {
  const [isMobile, setIsMobile] = useState(false);
  const [glow, setGlow] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 640);
    };
    handleResize(); // run once on mount
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const handleTouch = () => {
    if (isMobile) {
      setGlow(true);
      setTimeout(() => setGlow(false), 400); // smooth ease-out
    }
  };

  return (
    <img
      src={src}
      alt={alt}
      onTouchStart={handleTouch}
      className={`rounded-lg w-full object-cover transition-all duration-500 ease-out 
        ${glow ? 'shadow-[0_0_40px_#A45731] scale-115' : 'shadow-xl'}`}
    />
  );
};

const AboutHeader = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: 'ease-in-out',
      once: true,
    });
  }, []);

  return (
    <section
      className="bg-white dark:bg-black py-20 px-0 md:px-22 transition-colors duration-300"
      id="about"
    >
      <div className="container mx-auto px-6 lg:px-12">
        
        {/* Section Title */}
        <h2
          className="text-4xl lg:text-5xl font-bold text-[#a45731] text-center mb-6 tracking-wide"
          data-aos="fade-up"
        >
          Discover Our Story
        </h2>

        {/* Subtitle */}
        <p
          className="text-lg text-gray-700 dark:text-gray-300 text-center max-w-3xl mx-auto mb-16"
          data-aos="fade-up"
          data-aos-delay="100"
        >
          More than just a dessert parlour – we’re a place where memories are made 
          and chocolate dreams come true.
        </p>

        {/* Grid Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          {/* Left Side - Image */}
          <div data-aos="fade-right">
            <MobileGlowImage src="about.png" alt="Discover our story" />
          </div>

          {/* Right Side - Story Text */}
          <div data-aos="fade-left" className="text-left space-y-6">
            <h3 className="text-2xl font-semibold text-[#a45731]">
              Finest Ingredients
            </h3>
            <p className="text-gray-800 dark:text-gray-300 text-base leading-relaxed">
              From silky Belgian chocolate to the finest natural coffee beans, 
              every treat is crafted with passion and care.
            </p>

            <h3 className="text-2xl font-semibold text-[#a45731]">
              Crafted With Care
            </h3>
            <p className="text-gray-800 dark:text-gray-300 text-base leading-relaxed">
              Quality and flavour in every sip and bite – because you deserve the very best.  
              We blend tradition with creativity, ensuring each dessert tells a story of indulgence.  
            </p>

            <h3 className="text-2xl font-semibold text-[#a45731]">
              A Place to Belong
            </h3>
            <p className="text-gray-800 dark:text-gray-300 text-base leading-relaxed">
              Step inside our world of sweetness, where every visit is an invitation 
              to celebrate life’s moments, big or small.  
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutHeader;
