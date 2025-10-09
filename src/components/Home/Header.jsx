import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const Header = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: "ease-in-out",
      once: true,
    });
  }, []);

  return (
    <section
      id="hero"
      className="relative text-white text-center px-4 h-screen bg-black flex items-center justify-center overflow-hidden"
    >
      {/* Background Video */}
      <div className="absolute inset-0 w-full h-full">
        <video
          className="object-cover w-full h-full"
          src="/vedio.mp4"
          autoPlay
          muted
          loop
          playsInline
          style={{ filter: "brightness(0.5)" }}
        />
      </div>

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full px-4">
        <h1
          className="text-5xl font-extrabold text-[#a45731]"
          data-aos="fade-up"
        >
          Welcome to <span className="text-white">Chocoholics</span> Desserts
        </h1>

        <p
          className="text-lg mt-4 bg-[#a45731] text-white py-2 px-4 inline-block rounded-md"
          data-aos="fade-up"
          data-aos-delay="200"
        >
          Indulge in a world of delicious desserts!
        </p>
      </div>

      {/* === Mobile-Only Styling === */}
      <style jsx>{`
        @media (max-width: 640px) {
          h1 {
            font-size: 1.9rem !important; /* reduce heading size for 360px */
            line-height: 2.4rem;
            padding: 0 0.5rem;
          }
          p {
            font-size: 0.9rem !important;
            margin-top: 1rem;
            padding: 0.5rem 1rem;
          }
         
        }
      `}</style>
    </section>
  );
};

export default Header;
