import React, { useEffect } from 'react';
import { FaCookie, FaSearch, FaBuilding } from 'react-icons/fa'; // Updated to valid icons
import AOS from 'aos';
import 'aos/dist/aos.css'; // Import AOS styles

const UniqueFeatures = () => {
  useEffect(() => {
    // Initialize AOS when the component mounts
    AOS.init({
      duration: 1000,  // Animation duration
      easing: 'ease-in-out',  // Easing type
      once: true,  // Trigger animation only once
    });
  }, []);

  // Features data array
  const features = [
    {
      icon: <FaCookie className="w-16 h-16 text-white" />,
      title: "Artisanal Quality",
      description: "Every dessert is handcrafted with premium Belgian chocolate and finest ingredients",
      aosDelay: "400",
    },
    {
      icon: <FaSearch className="w-16 h-16 text-white" />,
      title: "Transparent Process",
      description: "Watch your desserts being made fresh, ensuring quality and creating excitement",
      aosDelay: "600",
    },
    {
      icon: <FaBuilding className="w-16 h-16 text-white" />,
      title: "Versatile Spaces",
      description: "From intimate dates to large celebrations, we accommodate every occasion perfectly",
      aosDelay: "800",
    },
  ];

  return (
    <section className="bg-black py-16 px-4">
      <div className="max-w-screen-xl mx-auto text-center">
        {/* Heading with caramel color */}
        <h2
          className="text-3xl font-extrabold text-[#a45731] mb-8"
          data-aos="fade-up"
        >
          What Makes Us Unique
        </h2>
        <p
          className="text-lg text-white mb-12"
          data-aos="fade-up"
          data-aos-delay="200"
        >
          The Chocoholics Difference
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-[#a45731] p-6 rounded-lg shadow-lg text-center border-4 border-white"
              data-aos="fade-up"
              data-aos-delay={feature.aosDelay}
            >
              <div className="flex justify-center mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold text-white">{feature.title}</h3>
              <p className="text-white">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default UniqueFeatures;
