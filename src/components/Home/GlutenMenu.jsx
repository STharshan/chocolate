import React, { useState, useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css'; // Import AOS styles

const categories = [
  "Waffles",
  "Crepes",
];

const allItems = [
  {
    title: "Strawberry Delight",
    category: "Waffles",
    fullprice: "£9.50",
    halfprice: "£7.50",
    image: "/Gluten Free Strawb Waffle.jpg",
  },
  {
    title: "Bananadrama",
    category: "Waffles",
    fullprice: "£9.50",
    halfprice: "£7.50",
    image: "/Gluten Free-Vegan Waffles-67.jpg",
  },
  {
    title: "Raspberry Lovers",
    category: "Waffles",
    fullprice: "£9.50",
    halfprice: "£7.50",
    image: "/Raspberry Heaven Waffle.jpg",
  },
  {
    title: "Strawberry Mania",
    category: "Crepes",
    fullprice: "£9.00",
    image: "/Crepes.jpg",
  },
  {
    title: "Raspberry Haven",
    category: "Crepes",
    fullprice: "£9.00",
    image: "/VeganCrepes.jpg",
  },
  {
    title: "Banana",
    category: "Crepes",
    fullprice: "£9.00",
    image: "/Vegan-Crepes.jpg",
  },
];

const GlutenMenu = () => {
  const [selected, setSelected] = useState("Waffles");

  const filtered = selected === "All"
    ? allItems
    : allItems.filter((item) => item.category === selected);

  useEffect(() => {
    // Initialize AOS when the component mounts
    AOS.init({
      duration: 1000,  // Animation duration
      easing: 'ease-in-out',  // Easing type
      once: true,  // Ensures the animation only triggers once
    });
  }, []);

  return (
    <section id='Glutenmenu' className="w-full bg-black text-white py-16 px-6">
      {/* Title */}
      <div className="text-center mb-8" data-aos="fade-up">
        <h2 className="text-4xl md:text-6xl font-bold mb-5 text-[#a45731]">
          Gluten Free Menu
        </h2>
      </div>

      {/* Categories */}
      <div className="flex flex-wrap justify-center gap-3 mb-10" data-aos="fade-up" data-aos-delay="200">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setSelected(cat)}
            className={`px-4 py-2 rounded-md font-medium text-sm transition duration-300 ease-in-out ${selected === cat
              ? "bg-[#a45731] text-white"
              : "bg-white text-black hover:bg-[#a45731] hover:text-white"
              }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Menu Grid */}
      <div className="grid md:grid-cols-3 sm:grid-cols-2 gap-8 max-w-5xl mx-auto">
        {filtered.map((item, i) => (
          <div
            key={i}
            className="bg-black rounded-lg border border-[#a45731]/30 text-center shadow-md overflow-hidden transition-all duration-300 ease-in-out transform hover:scale-105 hover:border-[#a45731] hover:border hover:z-10 hover:shadow-2xl"
            data-aos="fade-up"
            data-aos-delay={i * 200}  // Staggered animation delay based on the index
          >
            <img src={item.image} alt={item.title} className="w-full h-44 object-cover" />
            <div className="p-4">
              <div className="mb-2">
                <h3 className="text-lg font-bold text-[#a45731]">{item.title}</h3>
              </div>
              <div className="mb-5">
                <span className="text-[#a45731] font-semibold block">
                  Full Price: {item.fullprice}
                </span>
                {item.halfprice && (
                  <span className="text-[#a45731] font-semibold block mt-1">
                    Half Price: {item.halfprice}
                  </span>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default GlutenMenu;
