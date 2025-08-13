import React, { useState } from "react";
import { FiSearch, FiX } from "react-icons/fi";

const imagesTop = ["/menu1.png", "/menu2.png"];
const imagesBottom = ["/menu3.png", "/menu4.png", "/menu5.png"];

const MenuCard = () => {
    const [selectedImage, setSelectedImage] = useState(null);

    const openModal = (img) => setSelectedImage(img);
    const closeModal = () => setSelectedImage(null);

    return (
        <div className="bg-black text-white min-h-screen p-4 md:p-8">
            {/* Top Instruction */}
            <div className="flex items-center justify-center space-x-2 mb-12">
                <FiSearch className="text-white text-2xl md:text-3xl" />
                <p className="text-xl font-semibold">Click menus to enlarge</p>
            </div>

            {/* Top Section */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 max-w-5xl mx-auto">
                {imagesTop.map((img, i) => (
                    <img
                        key={i}
                        src={img}
                        alt={`Menu Top ${i + 1}`}
                        className="w-full object-contain rounded-md shadow-lg cursor-pointer hover:opacity-90 transition"
                        onClick={() => openModal(img)}
                    />
                ))}
            </div>

            {/* Bottom Section */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-10 max-w-6xl mx-auto">
                {imagesBottom.map((img, i) => (
                    <img
                        key={i}
                        src={img}
                        alt={`Menu Bottom ${i + 1}`}
                        className="w-full object-contain rounded-md shadow-lg cursor-pointer hover:opacity-90 transition"
                        onClick={() => openModal(img)}
                    />
                ))}
            </div>

            {/* Modal */}
            {selectedImage && (
                <div className="fixed inset-0 z-50 bg-black bg-opacity-90 flex items-center justify-center p-4">
                    <button
                        onClick={closeModal}
                        className="absolute top-4 right-4 text-white text-3xl hover:text-red-400"
                    >
                        <FiX />
                    </button>
                    <img
                        src={selectedImage}
                        alt="Enlarged Menu"
                        className="max-w-full max-h-full rounded-md shadow-xl"
                    />
                </div>
            )}
        </div>
    );
};

export default MenuCard;
