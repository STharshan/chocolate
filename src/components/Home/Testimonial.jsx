'use client';

import React, { useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import { FiStar } from 'react-icons/fi';
import { BsArrowLeft, BsArrowRight } from 'react-icons/bs';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import AOS from 'aos';
import 'aos/dist/aos.css';

const testimonials = [
  { text: 'Charlie was amazing today, very quick and efficient friendly service, me and a friend had a Sundae...', name: 'Sam McLaughlin' },
  { text: 'Food was amazing the waffles were so fresh and delicious.', name: `Lyla's Youtube Channel` },
  { text: 'We visited this evening as a family of three and were so impressed. The service was amazing...', name: 'Jack Anderson' },
  { text: 'This place is awesome! We had such a great time to end our night, and the desserts were delicious. The vibe was perfect, and the staff was super friendly', name: 'Naz B' },
  { text: 'Staff are great, work really hard, super polite and can’t do enough to please...', name: 'Kyle Marshall' },
  { text: 'The service was amazing the girl that served us was wonderful, food came at the perfect time, tasted amazing', name: 'Marcos Brock' },
  { text: 'PJ was amazing in making the food look good. Harvey showed good customer service skills and looked after me', name: 'Olivia McDonagh' },
  { text: 'The sundaes that we came in for were delicious, 🍨we will definitely be back! Fantastic service from Charlie who was friendly, professional & patient 👌', name: 'Ben G' },
  { text: 'First visit today and will certainly be back. Food was amazing, including gluten free options. Would recommend', name: 'Nat Sanders' },
  { text: 'I ordered two cookie doughs from here today, they were absolutely delicious', name: 'Sophie Middleton' }
];

function InitialAvatar({ name }) {
  const initials = name
    .split(' ')
    .map((n) => n[0])
    .join('')
    .slice(0, 2)
    .toUpperCase();

  return (
    <div className="w-12 h-12 min-w-[3rem] rounded-full bg-[#a45731]/20 border border-[#a45731]/40 flex items-center justify-center text-[#a45731] font-semibold text-base">
      {initials}
    </div>
  );
}

export default function ReviewsSlider() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: 'ease-in-out',
      once: true,
    });
  }, []);

  return (
    <section
      className="w-full bg-white dark:bg-black text-black dark:text-white py-16 px-4 relative transition-colors duration-300"
      id="reviews"
    >
      <style jsx>{`
        .swiper-pagination-bullet {
          background-color: transparent;
          border: 2px solid #a45731;
          width: 10px;
          height: 10px;
          opacity: 1;
          margin: 0 6px !important;
        }
        .swiper-pagination-bullet-active {
          background-color: #a45731;
        }
      `}</style>

      <div className="max-w-6xl mx-auto">
        {/* Heading */}
        <div className="text-center mb-12" data-aos="fade-up">
          <h2 className="text-4xl md:text-6xl font-bold mb-5 text-[#a45731]">
            What Our Customers Say
          </h2>
          <p className="text-gray-600 dark:text-gray-300 text-sm md:text-lg font-medium">
            Don’t just take our word for it – hear from our satisfied customers
          </p>
        </div>

        {/* Swiper */}
        <Swiper
          modules={[Navigation, Pagination]}
          navigation={{
            nextEl: '.swiper-button-next-custom',
            prevEl: '.swiper-button-prev-custom',
          }}
          pagination={{ clickable: true }}
          spaceBetween={30}
          slidesPerView={1}
          breakpoints={{
            640: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
          className="!pb-20"
        >
          {testimonials.map((t, idx) => (
            <SwiperSlide key={idx}>
              <article
                className="h-full rounded-2xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-black p-6 shadow-md transition hover:shadow-xl hover:border-[#a45731] group relative"
                data-aos="fade-up"
                data-aos-delay={`${idx * 200}`}
              >
                <div className="absolute inset-0 rounded-2xl pointer-events-none opacity-0 group-hover:opacity-100 transition bg-gradient-to-br from-[#a45731]/10 via-transparent to-transparent" />

                {/* Top Section */}
                <div className="flex items-center gap-3">
                  <InitialAvatar name={t.name} />
                  <div className="flex-1">
                    <div className="flex items-center gap-1 text-yellow-500">
                      {Array.from({ length: 5 }).map((_, i) => (
                        <FiStar key={i} className="w-4 h-4 fill-yellow-500" />
                      ))}
                    </div>
                    <div className="mt-1 text-xs text-gray-500 dark:text-gray-400">
                      Verified review
                    </div>
                  </div>
                </div>

                {/* Review Text */}
                <p className="mt-4 text-sm md:text-base text-gray-700 dark:text-gray-300 leading-relaxed min-h-[120px]">
                  “{t.text}”
                </p>

                {/* Bottom Section */}
                <div className="mt-5 flex items-center justify-between">
                  <div className="font-semibold text-[#a45731]">{t.name}</div>
                  <div className="flex items-center gap-1 px-2 py-1 rounded-full border border-[#a45731]/40 text-[#a45731]">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <FiStar key={i} className="w-3.5 h-3.5 fill-[#a45731]" />
                    ))}
                  </div>
                </div>
              </article>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Custom navigation arrows */}
        <div
          className="flex justify-center gap-6 mt-10"
          data-aos="fade-up"
          data-aos-delay="1000"
        >
          <button className="swiper-button-prev-custom w-10 h-10 flex items-center justify-center rounded-full border border-[#a45731] text-[#a45731] hover:bg-[#a45731] hover:text-white transition">
            <BsArrowLeft className="w-5 h-5" />
          </button>
          <button className="swiper-button-next-custom w-10 h-10 flex items-center justify-center rounded-full border border-[#a45731] text-[#a45731] hover:bg-[#a45731] hover:text-white transition">
            <BsArrowRight className="w-5 h-5" />
          </button>
        </div>

        {/* CTA Button */}
        <div className="mt-5 flex justify-center">
          <button
            onClick={() =>
              window.open(
                'https://www.google.com/search?q=Chocoholics+Desserts+Reviews',
                '_blank'
              )
            }
            className="bg-[#a45731] hover:bg-[#a45731]/80 border cursor-pointer mb-10 text-white px-6 py-2 rounded-md font-semibold text-sm md:text-base transform hover:scale-105 transition duration-300 ease-in-out"
          >
            Leave a Review
          </button>
        </div>
      </div>
    </section>
  );
}
