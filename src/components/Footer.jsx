import React from "react";
import { FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa";
import { FiMapPin, FiPhone, FiMail } from "react-icons/fi";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-black text-white px-6 py-5">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8 text-left">
        {/* Column 1 */}
        <div>
          <img
            className="h-20 w-20 font-serif tracking-widest ml-8 sm:ml-5"
            src="/logo.png"
            alt="logo"
          />
          <p className="text-md font-semibold text-gray-400 mb-4">
            Where comfort meets crave-worthy. Bite into our signature burgers,
            golden fries, and urban-inspired eats in the heart of the city.
          </p>
          <div className="flex space-x-4 text-white justify-center bg-[#a45731] rounded-full p-2 w-8">
            <a
              href="https://www.facebook.com/p/Chocoholic-desserts-61561513890525/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-blue-600"
            >
              <FaFacebookF />
            </a>
          </div>
        </div>

        {/* Column 2 */}
        <div>
          <h3 className="text-xl font-bold mb-5 text-[#a45731]">Quick Links</h3>
          <ul className="space-y-2 text-md text-gray-400 font-semibold">
            <li>
              <a href="#" className="hover:text-[#a45731]">
                Home
              </a>
            </li>
            <li>
              <a href="#menu" className="hover:text-[#a45731]">
                Menu
              </a>
            </li>
            <li>
              <a href="#about" className="hover:text-[#a45731]">
                About
              </a>
            </li>
            <li>
              <a href="#contact" className="hover:text-[#a45731]">
                Contact
              </a>
            </li>
          </ul>
        </div>

        {/* Column 3 */}
        <div>
          <h3 className="text-xl font-bold mb-5 text-[#a45731]">Our Menu</h3>
          <ul className="space-y-2 text-md text-gray-400 font-semibold">
            <li>
              <a href="#menu" className="hover:text-[#a45731]">
                Main Menu
              </a>
            </li>
            <li>
              <a href="#chilmenu" className="hover:text-[#a45731]">
                Children's Menu
              </a>
            </li>
            <li>
              <a href="#Glutenmenu" className="hover:text-[#a45731]">
                Gluten Free Menu
              </a>
            </li>
            <li>
              <a href="#Veganmenu" className="hover:text-[#a45731]">
                Vegan Menu
              </a>
            </li>
            <li>
              <Link to="/privacy-policy" className="hover:text-gray-300">Privacy Policy</Link> {/* Updated link */}
            </li>
            <li>
              <Link to="/terms-conditions" className="hover:text-gray-300">Terms & Conditions</Link> {/* Updated link */}
            </li>
          </ul>
        </div>

        {/* Column 4 */}
        <div>
          <h3 className="text-xl font-bold mb-5 text-[#a45731]">Contact Info</h3>
          <ul className="space-y-2 text-md text-gray-400 font-semibold">
            <li className="flex items-start gap-2">
              <a
                href="https://www.google.com/maps?q=Watling+St,+Hinckley+LE10+3ED,+United+Kingdom"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-start gap-2 hover:text-[#a45731]"
              >
                <FiMapPin className="mt-1 text-[#a45731]" />
                Watling St,<br />
                Hinckley LE10 3ED,<br />
                United Kingdom
              </a>
            </li>
            <li className="flex items-center gap-2">
              <a
                href="tel: 01455721021"
                className="flex items-center gap-2 hover:text-[#a45731]"
              >
                <FiPhone className="text-[#a45731]" />
                +44 1455 721021
              </a>
            </li>
            <li className="flex items-center gap-2">
              <FiMail className="text-[#a45731]" />
              <a
                href="mailto:chocoholicsdesserts@gmail.com"
                className="hover:text-[#a45731]"
              >
                chocoholicsdesserts@gmail.com
              </a>
            </li>
          </ul>
        </div>
      </div>

      <hr className="my-8 border-gray-600" />

      {/* Bottom Bar */}
      <div className="text-center text-md text-white font-semibold">
        © 2025 Chocoholics Desserts. All rights reserved.
      </div>
      <div className=" mt-2 text-center font-semibold">
        <p>
          Powered by{" "}
          <a
            href="https://www.ansely.co.uk/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#a45731] hover:underline"
          >
            Ansely
          </a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
