import React, { useState, useEffect } from "react";
import { Menu, X, ShoppingCart, Sun, Moon } from "lucide-react";
import { HashLink } from "react-router-hash-link";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [dark, setDark] = useState(true);
  const [openOrder, setOpenOrder] = useState(false); // 🔹 ORDER STATE

  const navLinks = [
    { href: "/#hero", label: "Home" },
    { href: "/#about", label: "About" },
    { href: "/#history", label: "History" },
    { href: "/#whyus", label: "Why Us" },
    { href: "/#signature", label: "Signature" },
    { href: "/#hire", label: "Hire" },
    { href: "/#menu", label: "Menu" },
    { href: "/#reviews", label: "Reviews" },
    { href: "/#contact", label: "Contact" }
  ];

  const closeMenu = () => setMenuOpen(false);

  // 🌙 Dark mode
  useEffect(() => {
    document.documentElement.classList.toggle("dark", dark);
  }, [dark]);

  // 🛒 Load order widget & auto-open
  useEffect(() => {
    if (!openOrder) return;

    // Load script once
    if (!document.getElementById("glf-script")) {
      const script = document.createElement("script");
      script.src = "https://www.fbgcdn.com/embedder/js/ewm2.js";
      script.async = true;
      script.defer = true;
      script.id = "glf-script";
      document.body.appendChild(script);
    }

    // Auto-click hidden trigger
    const interval = setInterval(() => {
      const btn = document.querySelector(".glf-button");
      if (btn) {
        btn.click();
        clearInterval(interval);
      }
    }, 300);

    return () => clearInterval(interval);
  }, [openOrder]);

  return (
    <>
      <nav className="fixed top-0 left-0 w-full z-50 bg-black text-white shadow-lg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 lg:h-20">

            {/* Logo */}
            <img
              src="/logo.png"
              alt="logo"
              className="h-10 sm:h-12 lg:h-16"
            />

            {/* Desktop Menu */}
            <div className="hidden xl:flex items-center space-x-6">
              {navLinks.map(link => (
                <HashLink
                  key={link.label}
                  smooth
                  to={link.href}
                  className="hover:text-[#a45731] transition font-medium"
                >
                  {link.label}
                </HashLink>
              ))}
            </div>

            {/* Desktop Buttons */}
            <div className="hidden xl:flex items-center gap-4">
              <button
                onClick={() => setDark(!dark)}
                className="p-2 border border-[#a45731] text-[#a45731] rounded-md hover:bg-[#a45731] hover:text-white"
              >
                {dark ? <Moon size={18} /> : <Sun size={18} />}
              </button>

              <button
                onClick={() => setOpenOrder(true)}
                className="flex items-center gap-2 bg-white text-black font-semibold px-4 py-2 rounded-md hover:bg-[#a45731] hover:text-white transition"
              >
                <ShoppingCart size={18} />
                Order Now
              </button>
            </div>

            {/* Mobile Buttons */}
            <div className="xl:hidden flex items-center gap-2">
              <button
                onClick={() => setDark(!dark)}
                className="p-2 border border-[#a45731] text-[#a45731] rounded-md"
              >
                {dark ? <Moon size={18} /> : <Sun size={18} />}
              </button>

              <button onClick={() => setMenuOpen(!menuOpen)}>
                {menuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {menuOpen && (
          <div className="fixed top-16 left-0 right-0 bg-black px-4 py-4 xl:hidden">
            {navLinks.map(link => (
              <a
                key={link.label}
                href={link.href}
                onClick={closeMenu}
                className="block px-4 py-2 hover:text-[#a45731]"
              >
                {link.label}
              </a>
            ))}

            <button
              onClick={() => {
                setOpenOrder(true);
                closeMenu();
              }}
              className="mt-4 w-full bg-white text-black py-3 rounded-md flex justify-center gap-2 font-semibold"
            >
              <ShoppingCart size={18} />
              Order Now
            </button>
          </div>
        )}
      </nav>

      {/* 🔹 HIDDEN ORDER TRIGGER */}
      <span
        className="glf-button"
        data-glf-cuid="1b0c346b-c9ef-41e9-9e74-94e1b06e9a31"
        data-glf-ruid="d4ffb98c-8e99-457b-ab09-d8df9211d69f"
        style={{ display: "none" }}
      >
        Order
      </span>
    </>
  );
};

export default Navbar;
