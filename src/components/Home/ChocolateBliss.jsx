import React from 'react';

const ChocolateBliss = () => {
    return (
        <div className="bg-black p-6 md:p-15">
            <div className="flex max-w-5xl mx-auto flex-col md:flex-row justify-between items-center text-center md:text-left">
                <div className="mb-6 md:mb-0">
                    <h1 className="text-4xl md:text-5xl font-bold text-center text-white mb-4">
                        Welcome to Pure Chocolate Bliss
                    </h1>
                    <p className="text-lg md:text-xl text-center text-gray-400">
                        Nestled in the heart of Hinckley, Leicestershire, we've been creating indulgent chocolate experiences since August 2024
                    </p>
                </div>
            </div>
            <div className="flex flex-col md:flex-row gap-4 mt-10 items-center justify-center">
                <a
                    href="#"
                    className="bg-white text-[#346909] text-center font-semibold py-3 px-6 rounded-full text-lg hover:bg-gray-400 transition duration-300"
                >
                    Visit Us Today
                </a>
                <a
                    href="#"
                    className="bg-black border-1 text-center font-semibold text-white py-3 px-6 rounded-full text-lg hover:bg-gray-400 transition duration-300"
                >
                    Download Voucher
                </a>
            </div>
        </div>
    );
};

export default ChocolateBliss;
