import React from "react";

const HeroSection = () => {
  return (
    <section className="flex flex-col md:flex-row items-center justify-center p-4 md:p-8 bg-black text-white">
      {/* Left Side: Text and logo */}
      <div className="text-center md:w-1/2 flex flex-col justify-center">
        <div className="text-3xl font-bold md:-ml-20 max-w-2xl">
          <p className="mt-4 text-3xl mb-5">
            Play our video: <span className="text-3xl text-left">To view our Dessert Heaven in Hinckley</span>
          </p>
          <img
            src="/logo.png" // Replace with actual logo path
            alt="Chocoholics Desserts Logo"
            className="mx-auto mb-4"
          />
        </div>
        <p className="text-2xl mx-auto md:-ml-5">
          "Where Chocolate Dreams Come True"
        </p>
      </div>

      {/* Right Side: Video */}
      <div className="w-3/4 md:w-1/3 relative">
        <video
          className="w-full h-auto object-cover"
          src="https://chocoholicsdesserts.co.uk/wp-content/uploads/2025/02/Dessert-Heaven-Video.mp4"
          autoPlay
          loop
          controls  // Adds default play, pause, volume, fullscreen controls
          playsInline
        />
      </div>
    </section>
  );
};

export default HeroSection;
