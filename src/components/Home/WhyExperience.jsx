import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css'; // Import AOS styles

const WhyExperience = () => {
  useEffect(() => {
    // Initialize AOS with desired settings
    AOS.init({
      duration: 1000,  // Animation duration
      easing: 'ease-in-out',  // Easing type
      once: true,  // Ensures the animation only triggers once
    });
  }, []);

  // Define the sections content as an array of objects
  const sections = [
    {
      title: 'Master Chocolatiers',
      buttonText: 'Live Chocolate Making',
      videoSrc: '/choco.mp4',
      description:
        'Watch our skilled chocolatiers work their magic before your eyes. Every creation is crafted with precision, passion, and the finest Belgian chocolate.',
      aosAnimation: 'fade-up',
      videoAnimation: 'zoom-in',
    },
    {
      title: 'Interactive Experience',
      buttonText: 'Watch & Learn',
      videoSrc: '/choco.mp4',
      description:
        'Our open kitchen concept lets you witness the artistry behind every dessert, making your visit both delicious and educational.',
      aosAnimation: 'fade-up',
      videoAnimation: 'zoom-in',
    },
  ];

  return (
    <div className="bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-10">
          {sections.map((section, index) => (
            <div
              key={index}
              className="bg-[#a45731] p-6 sm:p-8 rounded-2xl shadow-lg border-4 border-white"
              data-aos={section.aosAnimation} // Add animation for section
            >
              <h2 className="text-2xl sm:text-3xl font-semibold text-white mb-2">
                {section.title}
              </h2>
              <button className="text-sm sm:text-base text-white mb-4">
                {section.buttonText}
              </button>

              {/* Video with animation */}
              <div
                className="mb-6 rounded-xl overflow-hidden aspect-video"
                data-aos={section.videoAnimation} // Add animation for video
              >
                <video
                  src={section.videoSrc}
                  autoPlay
                  muted
                  loop
                  playsInline
                  preload="metadata"
                  className="w-full h-full object-cover"
                />
              </div>

              <p className="text-base leading-7 text-white">{section.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default WhyExperience;
