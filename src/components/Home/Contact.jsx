import React from "react";
import {
  FiClock,
  FiMapPin,
  FiPhone,
  FiGlobe
} from "react-icons/fi";
import { FaUtensils } from "react-icons/fa";

const Contact = () => {
  return (
    <section
      id="contact"
      className="bg-black text-white px-4 py-20 md:px-12 scroll-mt-24"
    >
      <p className="text-3xl text-center mb-10 font-semibold">Contact</p>

      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
        {/* Left Column */}
        <div className="space-y-6">
          {/* Logo */}
          <img
            src="/logo.png"
            alt="Chocoholics Desserts Logo"
            className="w-64 mx-auto"
          />

          {/* Tagline */}
          <p className="italic text-2xl text-center">
            “Where Chocolate Dreams Come True”
          </p>

          {/* Business Info and Call to Action */}
          <div className="flex flex-col md:flex-row gap-10 items-start md:items-center ml-25 md:ml-0 sm:ml-0">
            <div className="space-y-3 text-base md:text-lg">
              <p className="flex items-center gap-2">
                <FiClock /> <span>Open Mon–Sun : 12–10pm</span>
              </p>

              <p className="flex items-start gap-2">
                <FiMapPin />
                <span>
                  Watling Street<br />
                  Hinckley, LE10 3ED<br />
                  <em>(Behind the Car Wash)</em>
                </span>
              </p>

              <p className="flex items-center gap-2">
                <FiPhone /> <span>01455 721021</span>
              </p>

              <p className="flex items-center gap-2">
                <FaUtensils />
                <a
                  href="https://just-eat.co.uk"
                  className=" hover:text-green-400"
                >
                  Just-Eat.co.uk
                </a>
              </p>

              <p className="flex items-center gap-2">
                <FiGlobe />
                <a
                  href="https://www.chocoholicsdesserts.co.uk"
                  className=" hover:text-green-400"
                >
                  www.chocoholicsdesserts.co.uk
                </a>
              </p>
            </div>

            {/* Call to Action */}
            <div className="text-center mt-6 md:mt-0 max-w-70">
              <h3 className="text-xl md:text-2xl font-bold">BOOK YOUR PARTY NOW !!</h3>
              <img
                src="/baloon-party.webp"
                alt="Party Balloons"
                className="w-32 mx-auto mt-4"
              />
            </div>
          </div>
        </div>

        {/* Right Column - Map */}
        <div className="p-2 rounded-lg">
          <img
            src="/location.webp"
            alt="Chocoholics Desserts Map"
            className="w-full h-auto rounded-md"
          />
        </div>
      </div>
    </section>
  );
};

export default Contact;
