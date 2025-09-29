import React, { useState } from 'react';
import { Menu, X, ShoppingCart } from 'lucide-react';
import { HashLink } from 'react-router-hash-link';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/#about", label: "About" },
    { href: "/#whyus", label: "Why Us" },
    { href: "/#signature", label: "Signature" },
    { href: "/#hire", label: "Hire" },
    { href: "/#menu", label: "Menu" },
    { href: "/#reviews", label: "Reviews" },
    { href: "/#contact", label: "Contact" }
  ];

  const orderUrl = "https://www.just-eat.co.uk/restaurants-chocoholic-desserts-burbage/menu?utm_source=google&utm_medium=cpc&utm_campaign=CM_S_G_GBR_EN_[RES]_[ENGM]_FDSA_National&utm_campaignid=14654756066&gad_source=1&gad_campaignid=14654756066&gbraid=0AAAAAD3ULIWtKxb-e3KdHTLEQlieBNkuQ&gclid=Cj0KCQjw8p7GBhCjARIsAEhghZ2BRp8uuPVZRuARHQswip2Ai79hkWc0_Bk-AxUBTEXKZsyApz3rrUAaArQlEALw_wcB";

  const closeMenu = () => setMenuOpen(false);

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-black text-white shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <div className="flex-shrink-0">
            <img
              className="h-10 w-auto sm:h-12 lg:h-16" // Adjusted height for better scaling
              src="/logo.png"
              alt="logo"
            />
          </div>

          {/* Desktop Menu - Hidden on mobile and tablet */}
          <div className="hidden xl:flex items-center space-x-6">
            {navLinks.map((link) => (
              <HashLink
              smooth
                key={link.label}
                to={link.href}
                className="text-white hover:text-[#a45731] transition-colors duration-200 font-medium text-sm lg:text-base"
              >
                {link.label}
              </HashLink>
            ))}
          </div>

          {/* Desktop Order Button - Hidden on mobile and tablet */}
          <div className="hidden xl:flex">
            <a
              href={orderUrl}
              className="flex items-center gap-2 bg-white text-black font-semibold px-4 py-2 rounded-md shadow-md hover:bg-[#a45731] hover:text-white transition-all duration-200 text-sm lg:text-base"
              target="_blank"
              rel="noopener noreferrer"
            >
              <ShoppingCart size={18} />
              <span>Order Now</span>
            </a>
          </div>

          {/* Tablet Order Button - Visible only on medium screens */}
          <div className="hidden md:flex xl:hidden">
            <a
              href={orderUrl}
              className="flex items-center gap-2 bg-white text-black font-semibold px-3 py-2 rounded-md shadow-md hover:bg-[#a45731] hover:text-white transition-all duration-200 text-sm"
              target="_blank"
              rel="noopener noreferrer"
            >
              <ShoppingCart size={16} />
              <span className="hidden lg:inline">Order Now</span>
              <span className="lg:hidden">Order</span>
            </a>
          </div>

          {/* Mobile Menu Button - Visible on mobile and tablet */}
          <div className="xl:hidden">
            <button
              onClick={() => setMenuOpen(!menuOpen)} // Toggle menu visibility
              className="text-white hover:text-[#a45731] transition-colors duration-200 p-2"
              aria-label="Toggle menu"
            >
              {menuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile/Tablet Menu Overlay */}
      {menuOpen && (
        <div className="xl:hidden">
          {/* Backdrop */}
          <div 
            className="fixed z-40"
            onClick={closeMenu}
          />
          
          {/* Menu Panel */}
          <div className="fixed top-16 lg:top-20 left-0 right-0 bg-black border-t border-gray-800 z-50">
            <div className="px-4 py-4 space-y-2">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={closeMenu}
                  className="block px-4 text-white hover:text-[#a45731] hover:bg-gray-900 rounded-md transition-all duration-200 font-medium"
                >
                  {link.label}
                </a>
              ))}
              
              {/* Mobile Order Button */}
              <div className="pt-4 border-t border-gray-800 mt-4">
                <a
                  href={orderUrl}
                  onClick={closeMenu}
                  className="flex items-center justify-center gap-2 bg-white text-black font-semibold px-4 py-3 rounded-md shadow-md hover:bg-[#a45731] hover:text-white transition-all duration-200 w-full"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <ShoppingCart size={18} />
                  <span>Order Now</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
