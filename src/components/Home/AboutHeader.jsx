import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css'; // Import AOS styles
import { GiCoffeeBeans } from "react-icons/gi";
import { FaCoffee } from "react-icons/fa";

const AboutHeader = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: 'ease-in-out',
      once: true,
    });
  }, []);

  return (
    <section className="bg-white dark:bg-black py-20 px-0 md:px-16 transition-colors duration-300" id="about">
      <div className="container mx-auto px-6 lg:px-12 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        
        {/* Left Side - Image */}
        <div data-aos="fade-right">
          <img
            src="about.png"
            alt="Discover our story"
            className="rounded-lg shadow-lg w-full object-cover"
          />
        </div>

        {/* Right Side - Text Content */}
        <div data-aos="fade-left" className="text-left">
          <h2 className="text-3xl lg:text-4xl font-bold text-[#a45731] mb-6">
            Discover Our Story
          </h2>
          <p className="text-lg text-black dark:text-gray-300 leading-relaxed mb-6">
            More than just a dessert parlour – we're a destination where memories are made 
            and chocolate dreams become reality. Every treat is crafted with passion, 
            bringing joy and sweetness to every moment you share with us.
          </p>

          {/* Features List */}
          <div className="space-y-6">
            <div className="flex items-start gap-4" data-aos="fade-up" data-aos-delay="100">
              <div className="text-4xl text-[#a45731]"><GiCoffeeBeans /></div>
              <div>
                <h3 className="text-xl font-semibold text-black dark:text-white">Natural Coffee Beans</h3>
                <p className="text-black dark:text-gray-300 text-base">
                  We use only the finest, ethically sourced beans to ensure every sip 
                  is smooth, aromatic, and unforgettable.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4" data-aos="fade-up" data-aos-delay="200">
              <div className="text-4xl text-[#a45731]"><FaCoffee /></div>
              <div>
                <h3 className="text-xl font-semibold text-black dark:text-white">100% ISO Certification</h3>
                <p className="text-black dark:text-gray-300 text-base">
                  Our products meet the highest standards of quality and hygiene, 
                  ensuring your experience is always safe and premium.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutHeader;
