import React, { useEffect, useState } from 'react';
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';

const testimonials = [
  {
    text: `Charlie was amazing today, very quick and efficient friendly service, me and a friend had a Sundae, portion sizes were great, served in a lovely glass that looked like a mermaid tail! Presentation was amazing and place is lovely and clean and decor is beautiful`,
    name: 'Sam McLaughlin',
  },
  {
    text: `The kitchen staff last night were absolutely shocking! Felt sorry for the girl on the till trying to do her job with all that going on in the background. Well done to her. But whoever is the manager needs to sort it, so unprofessional and looks/sounds more like a local teenage girls hangout then a restaurant serving food. I wasn't the only person to complain and that was in the short time I was there.`,
    name: 'Sarah Lou',
  },
  {
    text: `We visited this evening as a family of three (two adults and our toddler) and were so impressed. The service was amazing, especially from the young woman behind the counter who was so lovely and friendly, chatting with us and making us feel welcome. On top of that, the desserts and milkshakes were incredibly delicious! We'll certainly be returning. Five stars from us`,
    name: 'Jack Anderson',
  },
  {
    text: `This is the Dubai chocolate. Dry dry dry filling inside and literally nothing of it. I’ve had Dubai chocolate many times from other places. This is the worst one I’ve had by far. Clearly, they made it wrong, but the fact it was this wrong is really bad. It’s literally a block of plain chocolate, which is not what I ordered`,
    name: 'Mateen Tariq',
  },
  {
    text: `Staff are great, work really hard,super polite and can’t do enough to please. The waffles were amazing.`,
    name: 'Kyle Marshall',
  },
];

const Testimonial = () => {
  const [index, setIndex] = useState(0);

  const next = () => setIndex((index + 1) % testimonials.length);
  const prev = () => setIndex((index - 1 + testimonials.length) % testimonials.length);

  useEffect(() => {
    const timer = setInterval(() => {
      next();
    }, 8000);
    return () => clearInterval(timer);
  }, [index]);

  return (
    <section className="w-full bg-black text-white py-16 px-4">
      {/* Heading */}
      <div className="text-center mb-12">
        <h2 className="text-4xl md:text-6xl font-bold mb-5 text-[#a45731]">
          What Our Customers Say
        </h2>
        <p className="text-gray-300 text-sm md:text-lg font-semibold">
          Don’t just take our word for it – hear from our satisfied customers
        </p>
      </div>

      {/* Testimonial Card */}
      <div className="max-w-3xl mx-auto bg-[#0e1b0e]/70 backdrop-blur border-1 border-[#a45731] rounded-lg p-8 relative shadow-md transition-all duration-300">
        {/* Gold stars */}
        <div className="text-center mb-4 text-yellow-400 text-xl">
          {'★'.repeat(5)}
        </div>

        {/* Testimonial Text */}
        <div className="text-center italic text-white text-lg leading-relaxed font-semibold max-w-2xl mx-auto">
          “{testimonials[index].text}”
        </div>

        {/* Name */}
        <div className="text-center mt-6 font-bold text-[#a45731] text-lg">
          {testimonials[index].name}
        </div>

        {/* Left arrow button with icon */}
        <button
          onClick={prev}
          className="absolute left-3 top-1/2 transform -translate-y-1/2 bg-black/30 hover:bg-[#a45731] rounded w-10 h-10 flex items-center justify-center text-white transition duration-300"
        >
          <FiChevronLeft className="w-5 h-5" />
        </button>

        {/* Right arrow button with icon */}
        <button
          onClick={next}
          className="absolute right-3 top-1/2 transform -translate-y-1/2 bg-black/30 hover:bg-[#a45731] rounded w-10 h-10 flex items-center justify-center text-white transition duration-300"
        >
          <FiChevronRight className="w-5 h-5" />
        </button>
      </div>
      
      {/* Dot Indicators */}
      <div className="flex justify-center mt-6 space-x-2">
        {testimonials.map((_, i) => (
          <div
            key={i}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              i === index ? 'bg-[#a45731]' : 'bg-gray-500'
            }`}
          ></div>
        ))}
      </div>
    </section>
  );
};

export default Testimonial;
