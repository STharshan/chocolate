import React, { useState, useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css'; // Import AOS styles

const categories = [
  "Waffles",
  "Sundaes",
];

const allItems = [
  {
    title: "Smartie",
    category: "Waffles",
    fullprice: "£5.00",
    image: "/Kids Smartie Waffle.jpg",
  },
  {
    title: "Bubblegum",
    category: "Waffles",
    fullprice: "£5.00",
    image: "/Kids Bubblegum Waffle.jpg",
  },
  {
    title: "Chocoholic",
    category: "Waffles",
    fullprice: "£5.00",
    image: "/Kids Chocolate Waffle.jpg",
  },
  {
    title: "Strawberry",
    category: "Waffles",
    fullprice: "£5.00",
    image: "/Kids Strawbella Waffle.jpg ",
  },
  {
    title: "Kinder",
    category: "Waffles",
    fullprice: "£5.00",
    image: "/Kids KinderWaffle.jpg",
  },
  {
    title: "Smartie Lover",
    category: "Sundaes",
    fullprice: "£6.00",
    image: "/Kids Smartie Sundae.jpg",
  },
  {
    title: "Bubblegum Lover",
    category: "Sundaes",
    fullprice: "£6.00",
    image: "/Kids Bubblegum Sundae.jpg",
  },
  {
    title: "Strawberry Lover",
    category: "Sundaes",
    fullprice: "£6.00",
    image: "/Kids Strawberry Sundae.jpg",
  },
];

const ChildrenMenu = () => {
  const [selected, setSelected] = useState("Waffles");

  const filtered = selected === "All"
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
    <section id='chilmenu' className="w-full bg-black text-white py-16 px-6">
      {/* Title */}
      <div className="text-center mb-8" data-aos="fade-up">
        <h2 className="text-4xl md:text-6xl font-bold mb-5 text-[#a45731]">
          Children's Menu
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
            data-aos-delay={i * 200}
          >
            {/* Match same height/width as GlutenMenu */}
            <img src={item.image} alt={item.title} className="w-full h-44 object-cover" />
            <div className="p-4">
              <div className="mb-2">
                <h3 className="text-lg font-bold text-[#a45731]">{item.title}</h3>
              </div>
              <div className="mb-5">
                <span className="text-[#a45731] font-semibold block">
                  Price: {item.fullprice}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ChildrenMenu;
