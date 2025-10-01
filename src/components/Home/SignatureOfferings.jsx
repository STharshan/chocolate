import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const SignatureOfferings = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: "ease-in-out",
      once: true,
    });
  }, []);

  const offerings = [
    {
      title: "Dubai Chocolate Strawberries",
      subtitle: "Local Legend",
      description:
        "Our signature dessert that has quickly become the talk of Leicestershire",
      videoSrc: "/dubaichocolate.mp4",
      delay: "400",
    },
    {
      title: "Old School Sprinkle Cake",
      subtitle: "Instagram Famous",
      description: "Artisanal cakes that are as beautiful as they are delicious",
      videoSrc: "/oldschool.mp4",
      delay: "600",
    },
    {
      title: "Kinda Surprise Waffle",
      subtitle: "Always Fresh",
      description:
        "Ever-changing menu that celebrates the best of each season",
      videoSrc: "/Kindasurprisewaffle.mp4",
      delay: "800",
    },
    {
      title: "Ferrero Rocher-inspired dessert",
      subtitle: "Ferrero Rocher",
      description:
        "Creamy indulgence layered with caramel and crunchy Biscoff topping",
      videoSrc: "/oldschool.mp4", // replace with your actual video file
      delay: "1000",
    },
  ];

  return (
    <section className="py-16 bg-black" id="signature">
      <div className="max-w-screen-xl mx-auto text-center px-4 sm:px-6 lg:px-8">
        <h2
          className="text-3xl font-extrabold text-[#a45731] mb-8"
          data-aos="fade-up"
        >
          Our Signature Offerings
        </h2>
        <p
          className="text-lg text-white mb-12"
          data-aos="fade-up"
          data-aos-delay="200"
        >
          What sets us apart from the rest
        </p>

        {/* Adjusted Grid for 4 videos */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[350px]">
          {offerings.map((offering, index) => (
            <div
              key={index}
              className={`relative rounded-lg overflow-hidden shadow-lg
                transform transition-all duration-300 ease-in-out
                hover:scale-105
                ${
                  index === 0 || index === offerings.length - 1
                    ? "md:col-span-2 md:row-span-1"
                    : "md:col-span-1"
                }
              `}
              data-aos="fade-up"
              data-aos-delay={offering.delay}
            >
              {/* Background Video */}
              <video
                src={offering.videoSrc}
                autoPlay
                muted
                loop
                playsInline
                className="w-full h-full object-cover"
              />

              {/* Always Visible Overlay */}
              <div
                className="absolute inset-0 bg-black/40 flex flex-col justify-end 
                           items-start p-6"
              >
                <h3 className="text-2xl font-bold text-white mb-2">
                  {offering.title}
                </h3>
                <span className="text-sm text-gray-200 mb-2">
                  {offering.subtitle}
                </span>
                <p className="text-white text-sm">{offering.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SignatureOfferings;
