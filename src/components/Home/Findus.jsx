import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css"; // Import AOS styles

const FindUs = () => {
  useEffect(() => {
    // Initialize AOS when the component mounts
    AOS.init({
      duration: 1000,  // Animation duration
      easing: "ease-in-out",  // Easing type
      once: true,  // Ensures the animation only triggers once
    });
  }, []);

  return (
    <section className="py-16 px-4 bg-black" id="contact">
      <div className="max-w-7xl mx-auto text-center">
        {/* Title with AOS fade-up animation */}
        <h2
          className="text-2xl md:text-3xl font-bold mb-10 text-[#a45731]"
          data-aos="fade-up"  // Apply fade-up animation
        >
          Find Us
        </h2>

        <div
          className="rounded-lg overflow-hidden shadow-lg w-full h-[400px] border-4 border-[#a45731]"
          data-aos="fade-up"  // Apply fade-up animation to the iframe container
        >
          <iframe
            title="Google Map - Chocoholics Desserts, Watling St, Hinckley LE10 3ED, United Kingdom"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2436.5421122308474!2d-1.4097814!3d52.5335434!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x487751007de9cb4d%3A0x8a8c25d6d621faa7!2sChocoholics%20Desserts!5e0!3m2!1sen!2suk!4v1691518585147!5m2!1sen!2suk"
            width="100%"
            height="100%"
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="border-0 w-full h-full"
          ></iframe>
        </div>
      </div>
    </section>
  );
};

export default FindUs;
