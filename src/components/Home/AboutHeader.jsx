import React from 'react';

const AboutHeader = () => {
  return (
    <section className="bg-black py-22">
      <div className="container mx-auto px-6 text-center">
        {/* Heading with caramel color */}
        <h2 className="text-3xl font-bold text-[#a45731] mb-4">About Chocoholics Desserts</h2>
        
        {/* Subheading with white text */}
        <p className="text-lg text-white">
          More than just a dessert parlour – we're a destination where memories are made and chocolate dreams become reality.
        </p>
      </div>
    </section>
  );
};

export default AboutHeader;
