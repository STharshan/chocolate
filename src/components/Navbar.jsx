import React, { useState } from 'react';
import { FiMenu, FiX, FiShoppingCart } from 'react-icons/fi';
import { Link } from 'react-router-dom';

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
          <Link to="/" className="hover:text-green-400">Home</Link>
          {/* <Link to="/menu" className="hover:text-green-400">Menu</Link>
          <Link to="/contact" className="hover:text-green-400">Contact</Link> */}
          <Link to="/about" className="hover:text-green-400">About</Link>
          <Link to="/whyus" className="hover:text-green-400">Why Us</Link> {/* Added the Why Us link */}
        </div>

        {/* Desktop Button */}
        <div className="hidden md:flex">
          <button className="flex items-center gap-2 bg-white text-black font-semibold px-4 py-2 rounded-md shadow hover:bg-[#4a821d] hover:text-white">
            <FiShoppingCart />
            <span>Order Now</span>
          </button>
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
          <Link to="/" onClick={() => setMenuOpen(false)} className="block hover:text-green-400">Home</Link>
          {/* <Link to="/menu" onClick={() => setMenuOpen(false)} className="block hover:text-green-400">Menu</Link>
          <Link to="/contact" onClick={() => setMenuOpen(false)} className="block hover:text-green-400">Contact</Link> */}
          <Link to="/about" onClick={() => setMenuOpen(false)} className="block hover:text-green-400">About</Link>
          <Link to="/whyus" onClick={() => setMenuOpen(false)} className="block hover:text-green-400">Why Us</Link> {/* Added Why Us link */}
          <button className="flex items-center gap-2 bg-white text-black px-4 py-2 rounded-md hover:bg-[#4a821d] hover:text-white">
            <FiShoppingCart />
            Order Now
          </button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
