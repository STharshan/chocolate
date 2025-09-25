import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css'; // Import AOS styles

const SignatureOfferings = () => {
  useEffect(() => {
    // Initialize AOS with desired settings
    AOS.init({
      duration: 1000,  // Animation duration
      easing: 'ease-in-out',  // Easing type
      once: true,  // Ensures the animation only triggers once
    });
  }, []);

  // Offerings data
  const offerings = [
    {
      title: "Dubai Chocolate Strawberries",
      subtitle: "Local Legend",
      description: "Our signature dessert that has quickly become the talk of Leicestershire",
      videoSrc: "/dubaichocolate.mp4",
      delay: "400",
    },
    {
      title: "Old School Sprinkle Cake",
      subtitle: "Instagram Famous",
      description: "Artisanal cakes that are as beautiful as they are delicious",
      videoSrc: "/oldschool.mp4",
      delay: "600",
    },
    {
      title: "Kinda Surprise Waffle",
      subtitle: "Always Fresh",
      description: "Ever-changing menu that celebrates the best of each season",
      videoSrc: "/Kindasurprisewaffle.mp4",
      delay: "800",
    },
  ];

  return (
    <section className="py-16 bg-black" id='signature'>
      <div className="max-w-screen-xl mx-auto text-center">
        {/* Heading with caramel color */}
        <h2
          className="text-3xl font-extrabold text-[#a45731] mb-8"
          data-aos="fade-up"
        >
          Our Signature Offerings
        </h2>
        <p
          className="text-lg text-white mb-12"
          data-aos="fade-up"
          data-aos-delay="200"
        >
          What sets us apart from the rest
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
          {offerings.map((offering, index) => (
            <div
              key={index}
              className="bg-[#a45731] p-6 rounded-lg shadow-lg text-center border-4 border-white hover:scale-105 transition transform duration-300 ease-in-out"
              data-aos="fade-up"
              data-aos-delay={offering.delay}
            >
              <div className="h-64 mb-4 flex justify-center items-center overflow-hidden rounded-md">
                <video
                  src={offering.videoSrc}
                  autoPlay
                  muted
                  loop
                  playsInline
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">
                {offering.title}
              </h3>
              <span className="text-sm text-white block mb-2">
                {offering.subtitle}
              </span>
              <p className="text-white">{offering.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SignatureOfferings;
