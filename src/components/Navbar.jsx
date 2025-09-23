import React, { useState } from 'react';
import { FiMenu, FiX, FiShoppingCart } from 'react-icons/fi';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-black text-white px-4 py-5 shadow-md">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Logo */}
        <img
          className="h-12 w-20 ml-4"
          src="/logo.png"
          alt="logo"
        />

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-8 font-semibold">
          <a href="/" className="hover:text-[#a45731]">Home</a>
          <a href="#about" className="hover:text-[#a45731]">About</a>
          <a href="#whyus" className="hover:text-[#a45731]">Why Us</a> {/* Added the Why Us link */}
        </div>

        {/* Desktop Button */}
        <div className="hidden md:flex">
          <a
            href="https://www.just-eat.co.uk/restaurants-chocoholic-desserts-burbage/menu?utm_source=google&utm_medium=cpc&utm_campaign=CM_S_G_GBR_EN_[RES]_[ENGM]_FDSA_National&utm_campaignid=14654756066&gad_source=1&gad_campaignid=14654756066&gbraid=0AAAAAD3ULIWtKxb-e3KdHTLEQlieBNkuQ&gclid=Cj0KCQjw8p7GBhCjARIsAEhghZ2BRp8uuPVZRuARHQswip2Ai79hkWc0_Bk-AxUBTEXKZsyApz3rrUAaArQlEALw_wcB"
            className="flex items-center gap-2 bg-white text-black font-semibold px-4 py-2 rounded-md shadow hover:bg-[#a45731] hover:text-white"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FiShoppingCart />
            <span>Order Now</span>
          </a>
        </div>

        {/* Mobile Menu Icon */}
        <div className="md:hidden">
          <button onClick={() => setMenuOpen(!menuOpen)}>
            {menuOpen ? <FiX size={24} /> : <FiMenu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-black text-white px-6 py-4 space-y-4 z-40">
          <a href="/" onClick={() => setMenuOpen(false)} className="block hover:text-[#a45731]">Home</a>
          <a href="/about" onClick={() => setMenuOpen(false)} className="block hover:text-[#a45731]">About</a>
          <a href="/whyus" onClick={() => setMenuOpen(false)} className="block hover:text-[#a45731]">Why Us</a>
          <a
            href="https://www.just-eat.co.uk/restaurants-chocoholic-desserts-burbage/menu?utm_source=google&utm_medium=cpc&utm_campaign=CM_S_G_GBR_EN_[RES]_[ENGM]_FDSA_National&utm_campaignid=14654756066&gad_source=1&gad_campaignid=14654756066&gbraid=0AAAAAD3ULIWtKxb-e3KdHTLEQlieBNkuQ&gclid=Cj0KCQjw8p7GBhCjARIsAEhghZ2BRp8uuPVZRuARHQswip2Ai79hkWc0_Bk-AxUBTEXKZsyApz3rrUAaArQlEALw_wcB"
            onClick={() => setMenuOpen(false)}
            className="flex items-center gap-2 bg-white text-black px-4 py-2 rounded-md hover:bg-[#a45731] hover:text-white"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FiShoppingCart />
            Order Now
          </a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
