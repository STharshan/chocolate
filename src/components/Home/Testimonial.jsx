import React from "react";
import { FiStar } from "react-icons/fi";

const testimonials = [
  {
    text:
      "Charlie was amazing today, very quick and efficient friendly service, me and a friend had a Sundae, portion sizes were great, served in a lovely glass that looked like a mermaid tail! Presentation was amazing and place is lovely and clean and decor is beautiful",
    name: "Sam McLaughlin",
  },
  {
    text:
      "The kitchen staff last night were absolutely shocking! Felt sorry for the girl on the till trying to do her job with all that going on in the background. Well done to her. But whoever is the manager needs to sort it, so unprofessional and looks/sounds more like a local teenage girls hangout then a restaurant serving food. I wasn't the only person to complain and that was in the short time I was there.",
    name: "Sarah Lou",
  },
  {
    text:
      "We visited this evening as a family of three (two adults and our toddler) and were so impressed. The service was amazing, especially from the young woman behind the counter who was so lovely and friendly, chatting with us and making us feel welcome. On top of that, the desserts and milkshakes were incredibly delicious! We'll certainly be returning. Five stars from us",
    name: "Jack Anderson",
  },
  {
    text:
      "This is the Dubai chocolate. Dry dry dry filling inside and literally nothing of it. I’ve had Dubai chocolate many times from other places. This is the worst one I’ve had by far. Clearly, they made it wrong, but the fact it was this wrong is really bad. It’s literally a block of plain chocolate, which is not what I ordered",
    name: "Mateen Tariq",
  },
  {
    text:
      "Staff are great, work really hard,super polite and can’t do enough to please. The waffles were amazing.",
    name: "Kyle Marshall",
  },
];

function InitialAvatar({ name }) {
  const initials = (name || "")
    .split(" ")
    .map((n) => n[0]?.toUpperCase())
    .slice(0, 2)
    .join("");
  return (
    <div className="w-10 h-10 rounded-full bg-[#a45731]/20 border border-[#a45731]/40 flex items-center justify-center text-[#a45731] font-semibold">
      {initials ? (
        initials
      ) : (
        <FiStar className="w-5 h-5 text-[#a45731]" />
      )}
    </div>
  );
}

export default function ReviewsGrid() {
  return (
    <section className="w-full bg-black text-white py-16 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-6xl font-bold mb-5 text-[#a45731]">What Our Customers Say</h2>
          <p className="text-gray-300 text-sm md:text-lg font-semibold">
          Don’t just take our word for it – hear from our satisfied customers
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((t, idx) => (
            <article
              key={idx}
              className="group relative rounded-2xl border border-[#a45731]/30 bg-black backdrop-blur p-6 shadow-lg transition hover:border-[#a45731]/70"
            >
              <div className="absolute inset-0 rounded-2xl pointer-events-none opacity-0 group-hover:opacity-100 transition bg-gradient-to-br from-[#a45731]/10 via-transparent to-transparent" />

              <div className="flex items-center gap-3">
                <InitialAvatar name={t.name} />
                <div className="flex-1">
                  <div className="flex items-center gap-1 text-yellow-400">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <FiStar key={i} className="w-4 h-4 fill-yellow-400" />
                    ))}
                  </div>
                  <div className="mt-1 text-xs text-gray-400">Verified review</div>
                </div>
              </div>

              <p className="mt-4 text-sm md:text-base text-gray-100 leading-relaxed">
                “{t.text}”
              </p>

              <div className="mt-5 flex items-center justify-between">
                <div className="font-semibold text-[#a45731]">{t.name}</div>
                <div className="flex items-center gap-1 px-2 py-1 rounded-full border border-[#a45731]/40 text-[#a45731]">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <FiStar key={i} className="w-3.5 h-3.5 fill-[#a45731]" />
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
