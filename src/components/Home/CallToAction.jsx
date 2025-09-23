import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css"; // Import AOS styles

const CallToAction = () => {
  useEffect(() => {
    // Initialize AOS with desired settings
    AOS.init({
      duration: 1000,  // Animation duration
      easing: 'ease-in-out',  // Easing type
      once: true,  // Ensures the animation only triggers once
    });
  }, []);

  return (
    <section className="bg-black py-16 px-8 text-center">
      <div className="">
        <h2
          className="text-[#a45731] text-3xl md:text-4xl font-bold mb-4"
          data-aos="fade-up"  // Add animation to the title
        >
          Ready to Experience the Magic?
        </h2>
        <p
          className="text-gray-400 text-lg mb-6"
          data-aos="fade-up"  // Add animation to the paragraph
          data-aos-delay="200"  // Add delay for staggered effect
        >
          Visit Leicestershire's sweetest destination and make your chocolate
          dreams come true
        </p>
        <div className="flex justify-center gap-4">
          <a
            href="#"
            className="bg-[#a45731] text-white py-2 px-6 rounded-md text-lg font-semibold transition hover:bg-white hover:text-[#a45731]"
            data-aos="fade-up"  // Add animation to the first button
            data-aos-delay="400"  // Staggered delay
          >
            Visit Us Today
          </a>
          <a
            href="#"
            className="bg-transparent border-2 border-white text-white py-2 px-6 rounded-md text-lg font-semibold transition hover:bg-white hover:text-[#a45731]"
            data-aos="fade-up"  // Add animation to the second button
            data-aos-delay="600"  // Staggered delay
          >
            Download Voucher
          </a>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;
