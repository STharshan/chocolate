import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css"; // Import AOS styles

const PassionSection = () => {
  useEffect(() => {
    // Initialize AOS with desired settings
    AOS.init({
      duration: 1000,  // Animation duration
      easing: 'ease-in-out',  // Easing type
      once: true,  // Ensures the animation only triggers once
    });
  }, []);

  return (
    <section className="bg-black py-16 px-6">
      <div className="container mx-auto text-center">
        {/* Title with caramel color */}
        <h2 
          className="text-3xl font-semibold text-[#a45731] mb-12" 
          data-aos="fade-up"  // Adding animation to the title
        >
          Our Passion
        </h2>

        {/* Subheading with white text */}
        <p 
          className="text-lg text-white mb-12"
          data-aos="fade-up"  // Adding animation to the subheading
          data-aos-delay="200"  // Optional delay
        >
          Watch our master chocolatiers work their magic before your eyes
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Artisanal Creations */}
          <div 
            className="bg-white p-6 rounded-lg shadow-lg border-4 border-[#a45731] hover:scale-105 transition duration-300 ease-in-out"
            data-aos="fade-up"  // Adding animation to Artisanal Creations card
            data-aos-delay="400"  // Optional delay for a staggered effect
          >
            <h3 className="text-xl font-semibold text-[#a45731] mb-4">
              Artisanal Creations
            </h3>
            <p className="text-base text-gray-700 mb-6">
              From molten lava cakes that ooze with rich Belgian chocolate to towering sundaes adorned with artisanal garnishes, every creation is crafted with precision and passion.
            </p>
            <div className="w-full h-64 bg-[#e0e0e0] rounded-md"></div>
          </div>

          {/* Signature Specialties */}
          <div 
            className="bg-white p-6 rounded-lg shadow-lg border-4 border-[#a45731] hover:scale-105 transition duration-300 ease-in-out"
            data-aos="fade-up"  // Adding animation to Signature Specialties card
            data-aos-delay="600"  // Optional delay for a staggered effect
          >
            <h3 className="text-xl font-semibold text-[#a45731] mb-4">
              Signature Specialties
            </h3>
            <p className="text-base text-gray-700 mb-6">
              Our signature "Death by Chocolate" has quickly become a local legend, while our seasonal specialties keep our menu fresh and exciting throughout the year.
            </p>
            <div className="w-full h-64 bg-[#e0e0e0] rounded-md"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PassionSection;
