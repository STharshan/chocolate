import React, { useState } from 'react';

const categories = [
  "Waffles",
  "Brownies",
  "Cookie Dough",
  "Crepes",
  "Gelato In A Tub or A Cone",
  "Sundaes",
  "Milkshakes",
];

const allItems = [
  {
    title: "Nutty Professor",
    category: "Waffles",
    fullprice: "£10.50",
    halfprice: "£8.50",
    image: "/Nutty Professor Waffle.jpg",
  },
  {
    title: "Chocoholic Dream",
    category: "Waffles",
    fullprice: "£9.50",
    halfprice: "£7.50",
    image: "/Chocoholic Heaven Waffle.jpg",
  },
  {
    title: "Strawberry Heaven",
    category: "Waffles",
    fullprice: "£10.00",
    halfprice: "£8.00",
    image: "/Strawberry Heaven Waffle.jpg",
  },
  {
    title: "Waffle Mix n Match",
    category: "Waffles",
    fullprice: "£10.50",
    halfprice: "£8.50",
    image: "/Mix and Match Waffle-6.jpg",
  },
  {
    title: "Raspberry Heaven",
    category: "Waffles",
    fullprice: "£9.00",
    halfprice: "£7.00",
    image: "/Raspberry Heaven Waffle.jpg",
  },
  {
    title: "Banoffe Sensation",
    category: "Waffles",
    fullprice: "£9.50",
    halfprice: "£7.50",
    image: "/Banoffee Waffle.jpg",
  },
  {
    title: "Kinder Surprise",
    category: "Waffles",
    fullprice: "£10.50",
    halfprice: "£8.50",
    image: "/Kinder Surprise Waffle.jpg",
  },
  {
    title: "Oreo Galore",
    category: "Waffles",
    fullprice: "£10.00",
    halfprice: "£8.00",
    image: "/Oreo Waffle.jpg",
  },
  {
    title: "Lotus Biscoff",
    category: "Waffles",
    fullprice: "£10.00",
    halfprice: "£8.00",
    image: "/Biscoff Waffle.jpg",
  },
  {
    title: "Minit Mania",
    category: "Waffles",
    fullprice: "£9.50",
    halfprice: "£7.50",
    image: "/Mint Mania Waffle.jpg",
  },
  {
    title: "Strawbella",
    category: "Waffles",
    fullprice: "£9.50",
    halfprice: "£7.50",
    image: "/Strawbella Waffle.jpg",
  },
  {
    title: "Lotus",
    category: "Brownies",
    fullprice: "£7.50",
    image: "/Lotus Brownie.jpg",
  },
  {
    title: "Ferrero Rocher",
    category: "Brownies",
    fullprice: "£8.50",
    image: "/Gluten Free Brownie.jpg",
  },
  {
    title: "Strawberry Heaven",
    category: "Brownies",
    fullprice: "£7.00",
    image: "/Strawberry Brownie.jpg",
  },
  {
    title: "Oreo",
    category: "Brownies",
    fullprice: "£7.50",
    image: "/Oreo Brownie.jpg",
  },
  {
    title: "Kinder",
    category: "Brownies",
    fullprice: "£8.00",
    image: "/Kinder Brownie.jpg",
  },
  {
    title: "Mint",
    category: "Brownies",
    fullprice: "£7.50",
    image: "/Mint Brownie.jpg",
  },
  {
    title: "Oreo",
    category: "Cookie Dough",
    fullprice: "£8.00",
    image: "/Oreo Cookie Dough.jpg",
  },
  {
    title: "Strawbeey Mania",
    category: "Cookie Dough",
    fullprice: "£7.50",
    image: "/Strawberry Mania Cookie Dough.jpg",
  },
  {
    title: "Kinder Lovers",
    category: "Cookie Dough",
    fullprice: "£8.00",
    image: "/Kinder Cookie Dough.jpg",
  },
  {
    title: "Nutty Sensation",
    category: "Cookie Dough",
    fullprice: "£8.50",
    image: "/Nutty Professor Cookie Dough.jpg",
  },
  {
    title: "Lotus",
    category: "Cookie Dough",
    fullprice: "£8.00",
    image: "/Lotus Milk Cake.jpg",
  },
  {
    title: "Milk Chocolate",
    category: "Cookie Dough",
    fullprice: "£6.50",
    image: "/Milky Bar Milkshake.jpg",
  },
  {
    title: "White Chocolate",
    category: "Cookie Dough",
    fullprice: "£6.50",
    image: "/White Chocolate Cookie Dough.jpg",
  },
  {
    title: "Banoffee",
    category: "Crepes",
    fullprice: "£8.50",
    image: "/Banoffee Crepe.png",
  },
  {
    title: "Strawberry Sensation",
    category: "Crepes",
    fullprice: "£8.50",
    image: "/Strawberry Crepe.jpg",
  },
  {
    title: "Smartie",
    category: "Crepes",
    fullprice: "£8.50",
    image: "/Smartie Crepe.jpg",
  },
  {
    title: "Lotus",
    category: "Crepes",
    fullprice: "£9.00",
    image: "/Lotus Brownie.jpg",
  },
  {
    title: "White Kinder",
    category: "Crepes",
    fullprice: "£9.00",
    image: "/White Kinder Crepe.png",
  },
  {
    title: "Oreotastic",
    category: "Crepes",
    fullprice: "£8.00",
    image: "/Oreo Crepe.jpg",
  },
  {
    title: "Nutty Lover",
    category: "Crepes",
    fullprice: "£9.50",
    image: "/Nutty Professor Crepe.jpg",
  },
  {
    title: "Kinder",
    category: "Crepes",
    fullprice: "£9.00",
    image: "/Kinder Crepe.jpg",
  },
  {
    title: "Strawbella",
    category: "Crepes",
    fullprice: "£8.50",
    image: "/Strawberry Crepe.jpg",
  },
  {
    title: "Gelato in a tub or a cone",
    category: "Gelato In A Tub or A Cone",
    fullprice: "£8.50",
    halfprice: "£2.50",
    image: "/Dubai Strawberries.jpg",
  },
  {
    title: "Strawberry",
    category: "Sundaes",
    fullprice: "£7.50",
    image: "/Strawberry Sundae.jpg",
  },
  {
    title: "Biscoff",
    category: "Sundaes",
    fullprice: "£8.00",
    image: "/Biscoffe Sundae.jpg",
  },
  {
    title: "Oreo",
    category: "Sundaes",
    fullprice: "£8.00",
    image: "/Oreo Sundae.jpg",
  },
  {
    title: "Strawberry",
    category: "Sundaes",
    fullprice: "£7.50",
    image: "/Strawberry Sundae.jpg",
  },
  {
    title: "Ferrero",
    category: "Sundaes",
    fullprice: "£8.00",
    image: "/Nutty Professor Sundae.jpg",
  },
  {
    title: "Chocolate Bar",
    category: "Milkshakes",
    fullprice: "£7.00",
    halfprice: "6.00",
    image: "/Twix Milkshake-14.jpg",
  },
  {
    title: "Raspberry Milkshake",
    category: "Milkshakes",
    fullprice: "£7.00",
    halfprice: "6.00",
    image: "/Raspberry Milkshake.jpg",
  },
  {
    title: "Nutella / Ferrero Rocher",
    category: "Milkshakes",
    fullprice: "£7.50",
    halfprice: "6.50",
    image: "/Mango Smoothie.jpg",
  },
  {
    title: "Nutella Fudge Brownie",
    category: "Milkshakes",
    fullprice: "£9.00",
    image: "/Reeces Milkshake.png",
  },
];


const MainMenu = () => {
  const [selected, setSelected] = useState("Waffles");

  const filtered = selected === "All"
    ? allItems
    : allItems.filter((item) => item.category === selected);

  return (
    <section id='menu' className="w-full bg-black text-white py-16 px-6">
      {/* Title */}
      <div className="text-center mb-8">
        <h2 className="text-4xl md:text-6xl font-bold mb-5">Main Menu</h2>
      </div>

      {/* Categories */}
      <div className="flex flex-wrap justify-center gap-3 mb-10">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setSelected(cat)}
            className={`px-4 py-2 rounded-md font-medium text-sm transition duration-300 ease-in-out ${selected === cat
              ? "bg-[#346909] text-white"
              : "bg-white text-black hover:bg-[#346909] hover:text-white"
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
            className="bg-[#0e1b0e]/90 rounded-lg shadow-md overflow-hidden transition-all duration-300 ease-in-out transform hover:scale-105 hover:border-[#346909] hover:border hover:z-10 hover:shadow-2xl"
          >
            <img src={item.image} alt={item.title} className="w-full h-60 ject-cover" />
            <div className="p-4">
              <div className="mb-2">
                <h3 className="text-lg font-bold">{item.title}</h3>
              </div>
              <div className="mb-5">
                <span className="text-green-400 font-semibold block">
                  Full Price: {item.fullprice}
                </span>
                {item.halfprice && (
                  <span className="text-yellow-400 font-semibold block mt-1">
                    Half Price: {item.halfprice}
                  </span>
                )}
              </div>
              <button className="w-full bg-[#346909] hover:bg-green-950 text-white py-2 rounded-md flex items-center justify-center gap-2 font-semibold transition duration-300 ease-in-out">
                <span className="text-xl">+</span> Add to Order
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* View Full Menu Button */}
      <div className="mt-12 flex justify-center">
        <button className="bg-[#346909] hover:bg-green-950 text-white px-6 py-2 rounded-md font-semibold text-sm md:text-base transform hover:scale-105 transition duration-300 ease-in-out">
          View Full Menu
        </button>
      </div>
    </section>
  );
};

export default MainMenu;
