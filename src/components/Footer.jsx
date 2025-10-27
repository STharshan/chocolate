import React from "react";
import { FaFacebookF, FaTiktok } from "react-icons/fa";
import { FiMapPin, FiPhone, FiMail } from "react-icons/fi";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-black text-white px-6 py-5 w-full overflow-hidden">
      {/* === Grid Columns === */}
      <div
        className="
          max-w-7xl mx-auto 
          grid grid-cols-1 md:grid-cols-4 gap-8 text-left
        "
      >
        {/* Column 1 */}
        <div>
          <img
            className="h-20 w-20 font-serif tracking-widest ml-8 sm:ml-5"
            src="/logo.png"
            alt="logo"
          />
          <p className="text-[15px] font-semibold text-gray-400 mb-4 leading-relaxed">
            Where comfort meets sweet cravings. Indulge in our signature desserts, rich flavors, 
            and irresistible treats baked fresh in the heart of the city.
          </p>
          <div className="flex gap-5">
            <div className="flex text-white justify-center bg-[#a45731] rounded-full p-2 w-8">
              <a
                href="https://www.facebook.com/p/Chocoholic-desserts-61561513890525/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-blue-600"
              >
                <FaFacebookF />
              </a>
            </div>
            <div className="flex text-white justify-center bg-[#a45731] rounded-full p-2 w-8">
              <a
                href="https://www.tiktok.com/@chocoholics.desserts"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-black"
              >
                <FaTiktok />
              </a>
            </div>
          </div>
        </div>

        {/* Column 2 */}
        <div>
          <h3 className="text-xl font-bold mb-5 text-[#a45731]">Quick Links</h3>
          <ul className="space-y-2 text-md text-gray-400 font-semibold">
            <li><a href="#" className="hover:text-[#a45731]">Home</a></li>
            <li><a href="#menu" className="hover:text-[#a45731]">Menu</a></li>
            <li><a href="#about" className="hover:text-[#a45731]">About</a></li>
            <li><a href="#contact" className="hover:text-[#a45731]">Contact</a></li>
            <li><Link to="/privacy-policy" className="hover:text-gray-300">Privacy Policy</Link></li>
            <li><Link to="/terms-conditions" className="hover:text-gray-300">Terms & Conditions</Link></li>
          </ul>
        </div>

        {/* Column 3 */}
        <div>
          <h3 className="text-xl font-bold mb-5 text-[#a45731]">Our Menu</h3>
          <ul className="space-y-2 text-md text-gray-400 font-semibold">
            <li><a href="#menu" className="hover:text-[#a45731]">Main Menu</a></li>
            <li><a href="#chilmenu" className="hover:text-[#a45731]">Children's Menu</a></li>
            <li><a href="#Glutenmenu" className="hover:text-[#a45731]">Gluten Free Menu</a></li>
            <li><a href="#Veganmenu" className="hover:text-[#a45731]">Vegan Menu</a></li>
          </ul>
        </div>

        {/* Column 4 */}
        <div>
          <h3 className="text-xl font-bold mb-5 text-[#a45731]">Contact Info</h3>
          <ul className="space-y-2 text-md text-gray-400 font-semibold">
            <li className="flex items-start gap-2">
              <a
                href="https://maps.app.goo.gl/4aCJNbQRUZEd72ZY8"
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
                href="tel:+441455721021"
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

      {/* === Bottom Bar === */}
      <div className="text-center flex flex-col items-center justify-center gap-1">
        <p className="text-sm md:text-base text-gray-300 font-semibold text-center">
          © 2025 Chocoholics Desserts. All rights reserved.
        </p>
        <p className="text-sm md:text-base font-semibold text-center">
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

      {/* === Tablet (768–1024px) Fix === */}
      <style jsx>{`
        @media (min-width: 768px) and (max-width: 1024px) {
          footer > div {
            display: grid !important;
            grid-template-columns: repeat(2, minmax(0, 1fr)) !important;
            gap: 50px !important;
            width: 100% !important;
            max-width: 100% !important;
            padding-left: 2rem !important;
            padding-right: 2rem !important;
            margin: 0 auto !important;
            justify-content: center !important;
            align-items: start !important;
          }

          footer {
            padding-top: 3rem !important;
            padding-bottom: 2rem !important;
          }

          footer h3 {
            font-size: 1.1rem;
          }

          footer p,
          footer a,
          footer li {
            font-size: 0.95rem;
          }

          /* Center the bottom copyright area */
          footer > div + hr + div {
            text-align: center !important;
            justify-content: center !important;
            align-items: center !important;
            margin: 0 auto !important;
            width: 100% !important;
          }
        }
      `}</style>
    </footer>
  );
};

export default Footer;
