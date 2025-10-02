import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css"; 
import { FiMail, FiMapPin, FiPhone } from "react-icons/fi";

const FindUs = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: "ease-in-out",
      once: true,
    });
  }, []);

  return (
    <section className="py-16 px-4 bg-white" id="contact">
      <div className="max-w-7xl mx-auto">
        {/* Title */}
        <h2
          className="text-3xl md:text-4xl font-bold mb-12 text-[#a45731] text-center"
          data-aos="fade-up"
        >
          Contact Us
        </h2>

        {/* Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          {/* Contact Details Card */}
          <div
            className="bg-gradient-to-r from-[#a45731] to-[#70371f] text-white rounded-2xl shadow-xl p-8 flex flex-col justify-between"
            data-aos="fade-right"
          >
            <div>
              <h3 className="text-2xl font-semibold mb-6">Get in Touch</h3>

              <p className="mb-5">
                <span className="font-semibold">Address:</span> <br />
                <a
                  href="https://maps.app.goo.gl/4aCJNbQRUZEd72ZY8"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-start gap-2 hover:text-black transition"
                >
                  <FiMapPin className="mt-1" />
                  Watling St,
                  <br />
                  Hinckley LE10 3ED,
                  <br />
                  United Kingdom
                </a>
              </p>

              <p className="mb-5">
                <span className="font-semibold">Phone:</span> <br />
                <a
                  href="tel:+441455721021"
                  className="flex items-center gap-2 hover:text-black transition"
                >
                  <FiPhone />
                  +44 1455 721021
                </a>
              </p>

              <p className="mb-5">
                <span className="font-semibold">Email:</span> <br />
                <a
                  href="mailto:chocoholicsdesserts@gmail.com"
                  className="flex items-center gap-2 hover:text-black transition"
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
                className="bg-white text-[#a45731] font-semibold px-6 py-3 rounded-lg shadow-md hover:bg-[#70371f] hover:text-white transition"
              >
                Hire us for private events
              </a>
            </div>
          </div>

          {/* Google Map */}
          <div
            className="rounded-2xl overflow-hidden shadow-xl w-full h-[400px]"
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
