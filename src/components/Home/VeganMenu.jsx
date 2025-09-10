import React, { useState } from 'react';

const categories = [
    "Waffles",
    "Crepes",
];

const allItems = [
    {
        title: "Strawberry Lover",
        category: "Waffles",
        fullprice: "£9.50",
        halfprice: "£7.50",
        image: "/Strawberry Heaven Waffle.jpg",
    },
    {
        title: "Banana Dream",
        category: "Waffles",
        fullprice: "£9.50",
         halfprice: "£7.50",
        image: "/Vegan Waffle.jpg",
    },
    {
        title: "Raspberry Delight",
        category: "Waffles",
        fullprice: "£9.50",
         halfprice: "£7.50",
        image: "/Raspberry Heaven Waffle.jpg",
    },
    {
        title: "Strawberry Sensation",
        category: "Crepes",
        fullprice: "£9.00",
        image: "/Crepes.jpg",
    },

    {
        title: "Banana Delight",
        category: "Crepes",
        fullprice: "£9.00",
        image: "/Vegan-Crepes.jpg",
    },
    {
        title: "Raspberry Heaven",
        category: "Crepes",
        fullprice: "£9.00",
        image: "/VeganCrepes.jpg",
    },

];



const VeganMenu = () => {
    const [selected, setSelected] = useState("Waffles");

    const filtered = selected === "All"
        ? allItems
        : allItems.filter((item) => item.category === selected);

    return (
        <section id='Veganmenu' className="w-full bg-black text-white py-16 px-6">
            {/* Title */}
            <div className="text-center mb-8">
                <h2 className="text-4xl md:text-6xl font-bold mb-5 text-[#a45731]">
                    Vegan Menu
                </h2>
            </div>

            {/* Categories */}
            <div className="flex flex-wrap justify-center gap-3 mb-10">
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
                        className="bg-black rounded-lg shadow-md overflow-hidden transition-all duration-300 ease-in-out transform hover:scale-105 hover:border-[#a45731] hover:border hover:z-10 hover:shadow-2xl"
                    >
                        <img src={item.image} alt={item.title} className="w-full h-60 object-cover" />
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
                            <button className="w-full bg-[#a45731] hover:bg-[#a45731] text-white py-2 rounded-md flex items-center justify-center gap-2 font-semibold transition duration-300 ease-in-out">
                                <span className="text-xl">+</span> Add to Order
                            </button>
                        </div>
                    </div>
                ))}
            </div>

            {/* View Full Menu Button */}
            <div className="mt-12 flex justify-center">
                <button className="bg-[#a45731] hover:bg-[#a45731] text-white px-6 py-2 rounded-md font-semibold text-sm md:text-base transform hover:scale-105 transition duration-300 ease-in-out">
                    View Full Menu
                </button>
            </div>
        </section>
    );
};

export default VeganMenu;
