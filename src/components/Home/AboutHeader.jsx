import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css'; // Import AOS styles

const AboutHeader = () => {
  useEffect(() => {
    // Initialize AOS with desired settings
    AOS.init({
      duration: 1000,  // Animation duration
      easing: 'ease-in-out',  // Easing type
      once: true,  // Ensure the animation happens only once
    });
  }, []);

  return (
    <section className="bg-black py-20" id='about'>
      <div className="container mx-auto px-6 text-center">
        {/* Heading with caramel color */}
        <h2
          className="text-3xl font-bold text-[#a45731] mb-4"
          data-aos="fade-up" // Add AOS animation
        >
          About Chocoholics Desserts
        </h2>

        {/* Subheading with white text */}
        <p
          className="text-lg text-white"
          data-aos="fade-up"  // Add AOS animation
          data-aos-delay="200"  // Optional delay for animation
        >
          More than just a dessert parlour – we're a destination where memories are made and chocolate dreams become reality.
        </p>
      </div>
    </section>
  );
};

export default AboutHeader;
