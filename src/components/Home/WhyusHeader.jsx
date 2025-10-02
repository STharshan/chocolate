import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css'; // Import AOS styles

const WhyusHeader = () => {
  useEffect(() => {
    // Initialize AOS with desired settings
    AOS.init({
      duration: 1000,  // Animation duration
      easing: 'ease-in-out',  // Easing type
      once: true,  // Ensures the animation only triggers once
    });
  }, []);

  return (
    <section className="bg-white dark:bg-black py-22 transition-colors duration-300" id="whyus">
      <div className="container mx-auto px-6 text-center">
        <h2 
          className="text-3xl font-bold text-[#a45731] mb-4"
          data-aos="fade-up"
        >
          Why Choose Chocoholics Desserts?
        </h2>
        <p 
          className="text-lg text-black dark:text-gray-300"
          data-aos="fade-up"
          data-aos-delay="200"
        >
          Discover what makes us Leicestershire's premier chocolate destination
        </p>
      </div>
    </section>
  );
};

export default WhyusHeader;
