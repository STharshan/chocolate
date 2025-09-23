import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css"; // Import AOS styles

const WhyCall = () => {
  useEffect(() => {
    // Initialize AOS when the component mounts
    AOS.init({
      duration: 1000,  // Animation duration
      easing: 'ease-in-out',  // Easing type
      once: true,  // Ensures the animation only triggers once
    });
  }, []);

  return (
    <section className="bg-black py-16 px-8 text-center">
      <h2 
        className="text-[#a45731] text-3xl md:text-4xl font-bold mb-4"
        data-aos="fade-up" // Add fade-up animation to the heading
      >
        Experience the Chocoholics Difference
      </h2>
      <p 
        className="text-white text-lg mb-6"
        data-aos="fade-up"  // Add fade-up animation to the paragraph
        data-aos-delay="200"  // Slight delay for a smoother effect
      >
        Join us for an unforgettable journey through pure chocolate bliss
      </p>
      <div className="flex justify-center gap-4">
        <a
          href="#"
          className="bg-[#a45731] text-white py-2 px-6 rounded-md text-lg font-semibold transition hover:bg-white hover:text-[#a45731]"
          data-aos="fade-up"  // Add fade-up animation to the first button
          data-aos-delay="400"  // Delay for staggered effect
        >
          Book Your Visit
        </a>
        <a
          href="#"
          className="bg-transparent border-2 border-white text-white py-2 px-6 rounded-md sm:text-lg text-sm sm:font-semibold transition hover:bg-white hover:text-[#a45731]"
          data-aos="fade-up"  // Add fade-up animation to the second button
          data-aos-delay="600"  // Delay for staggered effect
        >
          Download First-Visit Voucher
        </a>
      </div>
    </section>
  );
};

export default WhyCall;
