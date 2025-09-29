import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css"; // Import AOS styles
import { FiMail, FiMapPin, FiPhone } from "react-icons/fi";

const FindUs = () => {
  useEffect(() => {
    // Initialize AOS when the component mounts
    AOS.init({
      duration: 1000, // Animation duration
      easing: "ease-in-out", // Easing type
      once: true, // Ensures the animation only triggers once
    });
  }, []);

  return (
    <section className="py-16 px-4 bg-black" id="contact">
      <div className="max-w-7xl mx-auto">
        {/* Title */}
        <h2
          className="text-2xl md:text-3xl font-bold mb-10 text-[#a45731] text-center"
          data-aos="fade-up"
        >
          Contact Us
        </h2>

        {/* Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2  gap-10 items-center">
          {/* Contact Details Box */}
          <div
            className="bg-gradient-to-r from-[#a45731] to-[#70371f] h-100 text-white rounded-lg shadow-lg p-6 flex flex-col justify-between"
            data-aos="fade-right"
          >
            <div>
              <h3 className="text-xl font-semibold mb-4">Contact Details</h3>

              <p className="mb-3">
                <span className="font-semibold">Address:</span> <br />
                <a
                  href="https://maps.app.goo.gl/4aCJNbQRUZEd72ZY8"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-start gap-2 hover:text-black"
                >
                  <FiMapPin className="mt-1" />
                  Watling St,
                  <br />
                  Hinckley LE10 3ED,
                  <br />
                  United Kingdom
                </a>
              </p>

              <p className="mb-3">
                <span className="font-semibold">Phone:</span> <br />
                <a
                  href="tel:+441455721021"
                  className="flex items-center gap-2 hover:text-black"
                >
                  <FiPhone />
                  +44 1455 721021
                </a>
              </p>

              <p className="mb-3">
                <span className="font-semibold">Email:</span> <br />
                <a
                  href="mailto:chocoholicsdesserts@gmail.com"
                  className="flex items-center gap-2 hover:text-black"
                >
                  <FiMail />
                  chocoholicsdesserts@gmail.com
                </a>
              </p>
            </div>

            {/* CTA Button */}
            <div className="mt-6 flex justify-center">
              <a
                href="#hire"
                className="bg-white text-[#a45731] font-semibold px-6 py-2 rounded-lg shadow-md hover:bg-[#70371f] hover:text-white transition"
              >
                HIRE Us For private events
              </a>
            </div>
          </div>

          {/* Google Map */}
          <div
            className="rounded-lg overflow-hidden shadow-lg w-full h-[400px] border-4 border-[#a45731]"
            data-aos="fade-left"
          >
            <iframe
              title="Google Map - Chocoholics Desserts, Watling St, Hinckley LE10 3ED, United Kingdom"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2436.5421122308474!2d-1.4097814!3d52.5335434!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x487751007de9cb4d%3A0x8a8c25d6d621faa7!2sChocoholics%20Desserts!5e0!3m2!1sen!2suk!4v1691518585147!5m2!1sen!2suk"
              width="100%"
              height="100%"
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="border-0 w-full h-full"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FindUs;
