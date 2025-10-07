import React, { useState, useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const categories = ["Waffles", "Crepes"];

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
    image: "/Banoffee Waffle.jpg",
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

  const filtered =
    selected === "All"
      ? allItems
      : allItems.filter((item) => item.category === selected);

  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: 'ease-in-out',
      once: true,
    });
  }, []);

  return (
    <section
      id="Glutenmenu"
      className="w-full bg-white dark:bg-black text-black dark:text-white py-20 px-6 transition-colors duration-300"
    >
      {/* Title */}
      <div className="text-center mb-12" data-aos="fade-up">
        <h2 className="text-4xl md:text-6xl font-extrabold text-[#a45731] mb-4 tracking-wide">
          Gluten Free Menu
        </h2>
        <p className="text-lg text-gray-600 dark:text-gray-300">
          Delicious gluten-free treats crafted with love
        </p>
      </div>

      {/* Categories */}
      <div
        className="flex flex-wrap justify-center gap-3 mb-14"
        data-aos="fade-up"
        data-aos-delay="200"
      >
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setSelected(cat)}
            className={`px-5 py-2 rounded-full text-sm font-semibold border transition duration-300 transform 
              cursor-pointer select-none
              ${
                selected === cat
                  ? "bg-[#a45731] text-white border-[#a45731] shadow-md scale-105"
                  : "bg-white dark:bg-black text-black dark:text-white border-gray-300 dark:border-gray-600 hover:bg-[#a45731] hover:text-white hover:border-[#a45731] active:bg-[#a45731] active:text-white active:border-[#a45731]"
              }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Menu Grid */}
      <div className="grid md:grid-cols-3 sm:grid-cols-2 gap-10 max-w-6xl mx-auto">
        {filtered.map((item, i) => (
          <div
            key={i}
            className="bg-white dark:bg-black rounded-2xl border border-gray-200 dark:border-gray-700 
              text-center shadow-md overflow-hidden transition-all duration-300 
              hover:shadow-xl active:shadow-xl hover:-translate-y-2 active:-translate-y-2 
              hover:border-[#a45731] active:border-[#a45731] cursor-pointer select-none"
            data-aos="fade-up"
            data-aos-delay={i * 150}
          >
            {/* Image */}
            <div className="overflow-hidden">
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-48 object-cover transform transition-transform duration-500 
                hover:scale-110 active:scale-110"
              />
            </div>

            {/* Content */}
            <div className="p-6">
              <h3 className="text-xl font-bold text-[#a45731] mb-1">
                {item.title}
              </h3>
              <p className="text-sm text-gray-500 dark:text-gray-400 mb-3">
                {item.category}
              </p>

              <p className="text-gray-700 dark:text-gray-300 font-medium">
                Full Price: {item.fullprice}
              </p>
              {item.halfprice && (
                <p className="text-gray-600 dark:text-gray-400 mt-1">
                  Half Price: {item.halfprice}
                </p>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default GlutenMenu;
