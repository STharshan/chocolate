import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css"; // Import AOS styles

const ExperienceSection = () => {
  useEffect(() => {
    // Initialize AOS with desired settings
    AOS.init({
      duration: 1000,  // Animation duration
      easing: 'ease-in-out',  // Easing type
      once: true,  // Ensures the animation only triggers once
    });
  }, []);

  return (
    <div className="bg-black py-16 px-4 sm:px-6 lg:px-8">
      <h2 
        className="text-3xl font-bold text-center text-[#a45731] mb-8"
        data-aos="fade-up" // Animation for the title
      >
        Your Experience
      </h2>
      <p 
        className="text-center text-white mb-16"
        data-aos="fade-up" // Animation for the subheading
        data-aos-delay="200" // Delay for staggered effect
      >
        We've designed our space to be the perfect setting for any occasion
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {/* Card 1 */}
        <div 
          className="bg-white rounded-lg shadow-lg overflow-hidden border-4 border-[#a45731]"
          data-aos="fade-up" // Animation for the first card
          data-aos-delay="400" // Staggered delay
        >
          <div className="bg-[#e0e0e0] h-40"></div>
          <div className="p-6 text-center">
            <h3 className="text-2xl font-semibold text-[#a45731] mb-4">
              Intimate Atmosphere
            </h3>
            <p className="text-gray-600">
              Perfect cozy spaces for romantic date nights and special moments
            </p>
          </div>
        </div>

        {/* Card 2 */}
        <div 
          className="bg-white rounded-lg shadow-lg overflow-hidden border-4 border-[#a45731]"
          data-aos="fade-up" // Animation for the second card
          data-aos-delay="600" // Staggered delay
        >
          <div className="bg-[#e0e0e0] h-40"></div>
          <div className="p-6 text-center">
            <h3 className="text-2xl font-semibold text-[#a45731] mb-4">
              Party Spaces
            </h3>
            <p className="text-gray-600">
              Accommodate celebrations of all sizes with our flexible party areas
            </p>
          </div>
        </div>

        {/* Card 3 */}
        <div 
          className="bg-white rounded-lg shadow-lg overflow-hidden border-4 border-[#a45731]"
          data-aos="fade-up" // Animation for the third card
          data-aos-delay="800" // Staggered delay
        >
          <div className="bg-[#e0e0e0] h-40"></div>
          <div className="p-6 text-center">
            <h3 className="text-2xl font-semibold text-[#a45731] mb-4">
              Family Paradise
            </h3>
            <p className="text-gray-600">
              Young chocolatiers will delight in our chocolate fountain paradise
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExperienceSection;
