import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css"; // Import the AOS stylesheet
import { LuChefHat } from "react-icons/lu";

const Header = () => {
  useEffect(() => {
    // Initialize AOS
    AOS.init({
      duration: 1000,  // Animation duration in milliseconds
      easing: "ease-in-out", // Easing for the animation
      once: true, // Ensures that the animation only triggers once
    });
  }, []);

  return (
    <section id="hero" className="relative text-white text-center px-4 min-h-screen bg-black">
      {/* Background Video */}
      <div className="absolute inset-0 w-full h-145 z-0 opacity-100 bg-black">
        <video
          className="object-cover w-full h-full"
          src="/vedio.mp4"
          autoPlay
          muted
          loop
          playsInline
          style={{ filter: 'brightness(0.5)' }} // Reduced brightness
        />
      </div>

      {/* Content */}
      <div className="relative z-10 md:pt-40 pt-30 ">
        {/* Heading with caramel accent */}
        <h1
          className="text-5xl font-extrabold text-[#a45731] mt-20"
          data-aos="fade-up" // Adding animation
        >
          Welcome to <span className="text-white">Chocoholics</span> Desserts
        </h1>

        {/* Subtext with white background and caramel text */}
        <p
          className="text-lg mt-4 bg-[#a45731] text-white py-2 px-4 inline-block rounded-md"
          data-aos="fade-up" // Adding animation
          data-aos-delay="200" // Optional delay for the animation
        >
          Indulge in a world of delicious desserts!
        </p>
      </div>
    </section>
  );
};

export default Header;
