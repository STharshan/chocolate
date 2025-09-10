import React, { useState } from 'react';

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

    return (
        <section id='menu' className="w-full bg-black text-white py-16 px-6">
            {/* Title */}
            <div className="text-center mb-8">
                <h2 className="text-4xl md:text-6xl font-bold mb-5">Gluten Free Menu</h2>
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
                        <img src={item.image} alt={item.title} className="w-full h-44 object-cover" />
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

export default GlutenMenu;
