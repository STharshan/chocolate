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
    <section className="bg-black py-22">
      <div className="container mx-auto px-6 text-center">
        <h2 
          className="text-3xl font-bold text-[#a45731] mb-4"
          data-aos="fade-up"  // Add fade-up animation to the title
        >
          Why Choose Chocoholics Desserts?
        </h2>
        <p 
          className="text-lg text-white"
          data-aos="fade-up"  // Add fade-up animation to the paragraph
          data-aos-delay="200"  // Optional delay for staggered animation
        >
          Discover what makes us Leicestershire's premier chocolate destination
        </p>
      </div>
    </section>
  );
};

export default WhyusHeader;
