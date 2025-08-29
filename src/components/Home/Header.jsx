import React from "react";
import { LuChefHat } from "react-icons/lu";

const Header = () => {
  return (
    <section id="hero" className="relative text-white text-center px-4 min-h-screen bg-black">
      {/* Background Video */}
      <div className="absolute inset-0 w-full h-full z-0">
        <video
          className="object-cover w-full h-full"
          src="https://chocoholicsdesserts.co.uk/wp-content/uploads/2025/02/headervideo.mp4"
          autoPlay
          muted
          loop
        />
      </div>

      {/* Content */}
      <div className="relative z-10 md:pt-40 pt-30">
        {/* Heading with caramel accent */}
        <h1 className="text-5xl font-extrabold text-[#a45731]">Welcome to <span className="text-white">Chocoholics</span> Desserts</h1>
        
        {/* Subtext with white background and caramel text */}
        <p className="text-lg mt-4 bg-[#a45731] text-white py-2 px-4 inline-block rounded-md">
          Indulge in a world of delicious desserts!
        </p>
      </div>
    </section>
  );
};

export default Header;
