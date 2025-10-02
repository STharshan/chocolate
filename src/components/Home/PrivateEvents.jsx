import React, { useState, useEffect } from 'react';
import { FaBirthdayCake, FaHeart, FaGift, FaBuilding } from 'react-icons/fa';
import AOS from 'aos';
import 'aos/dist/aos.css';
import emailjs from 'emailjs-com';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const PrivateEvents = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    phoneNumber: '',
    email: '',
    company: '',
    eventType: '',
    eventDate: '',
    startTime: '',
    endTime: '',
    numberOfGuests: '',
    catering: false,
    decorations: false,
    audioVisual: false,
    specialRequirements: '',
  });

  const [isFormVisible, setIsFormVisible] = useState(false);

  const eventCards = [
    {
      icon: <FaBirthdayCake className="w-16 h-16 text-white" />,
      title: "Children's Parties",
      description: "Chocolate-themed celebrations that kids will never forget",
      delay: "400",
    },
    {
      icon: <FaHeart className="w-16 h-16 text-white" />,
      title: "Date Nights",
      description: "Romantic settings perfect for intimate chocolate experiences",
      delay: "600",
    },
    {
      icon: <FaGift className="w-16 h-16 text-white" />,
      title: "Anniversaries",
      description: "Celebrate milestones with our special anniversary packages",
      delay: "800",
    },
    {
      icon: <FaBuilding className="w-16 h-16 text-white" />,
      title: "Corporate Events",
      description: "Business meetings with a sweet twist that impresses clients",
      delay: "1000",
    },
  ];

  const phoneNumberPattern = /^(?:\+44|0)[1-9]\d{8,9}$/;

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: type === 'checkbox' ? checked : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!phoneNumberPattern.test(formData.phoneNumber)) {
      toast.error('Please enter a valid phone number (starting with +44 or 0).');
      return;
    }

    emailjs
      .send(
        'service_404lxe7',
        'template_0a4q4eh',
        formData,
        'tmUgtXKf_TwGrV1iE'
      )
      .then(
        () => {
          toast.success('Your event has been booked successfully!');
          setFormData({
            fullName: '',
            phoneNumber: '',
            email: '',
            company: '',
            eventType: '',
            eventDate: '',
            startTime: '',
            endTime: '',
            numberOfGuests: '',
            catering: false,
            decorations: false,
            audioVisual: false,
            specialRequirements: '',
          });
        },
        () => {
          toast.error('Oops, something went wrong. Please try again!');
        }
      );
  };

  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: 'ease-in-out',
      once: true,
    });
  }, []);

  return (
    <>
      <ToastContainer />

      <section className="bg-white dark:bg-black py-16 px-6 transition-colors duration-300" id="hire">
        <div className="max-w-screen-xl mx-auto text-center">
          <h2
            className="text-3xl font-extrabold text-[#a45731] mb-8"
            data-aos="fade-up"
          >
            Private Functions & Events
          </h2>
          <p
            className="text-lg text-black dark:text-gray-300 mb-12"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            Perfect spaces for your special occasions
          </p>

          {/* Event Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
            {eventCards.map((card, index) => {
              const colors = ["#742904", "#8F431D", "#A45731", "#C37751"];
              return (
                <div
                  key={index}
                  className="p-8 text-center shadow-lg transition-all duration-300 ease-in-out hover:scale-105 "
                  style={{ backgroundColor: colors[index % colors.length] }}
                  data-aos="fade-up"
                  data-aos-delay={card.delay}
                >
                  <div className="flex justify-center mb-4">{card.icon}</div>
                  <h3 className="text-2xl font-semibold italic text-white mb-4">
                    {card.title}
                  </h3>
                  <p className="text-white mb-6">{card.description}</p>
                </div>
              );
            })}
          </div>

          {/* Contact Form Button */}
          <div className="mt-16">
            <button
              onClick={() => setIsFormVisible(!isFormVisible)}
              className="bg-[#a45731] text-white py-3 px-6 rounded-md font-semibold 
                         transition duration-300 hover:bg-[#8f431d] mb-8"
              data-aos="fade-up"
              data-aos-delay="1200"
            >
              {isFormVisible ? 'Hide Contact Form' : 'Get in Touch to Book Your Event'}
            </button>
          </div>

          {/* Contact Form */}
          {isFormVisible && (
            <div className="p-8 rounded-lg shadow-lg bg-white dark:bg-gray-900 transition-colors duration-300" data-aos="fade-up">
              <h3 className="text-2xl font-bold text-[#a45731] mb-6">
                Get in Touch to Book Your Event
              </h3>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="fullName" className="text-[#a45731]">Full Name*</label>
                    <input
                      type="text"
                      id="fullName"
                      name="fullName"
                      value={formData.fullName}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border-2 border-[#a45731] rounded-md text-black dark:text-white dark:bg-black"
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="phoneNumber" className="text-[#a45731]">Phone Number*</label>
                    <input
                      type="text"
                      id="phoneNumber"
                      name="phoneNumber"
                      value={formData.phoneNumber}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border-2 border-[#a45731] rounded-md text-black dark:text-white dark:bg-black"
                      required
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="eventType" className="text-[#a45731]">Event Type*</label>
                    <input
                      type="text"
                      id="eventType"
                      name="eventType"
                      value={formData.eventType}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border-2 border-[#a45731] rounded-md text-black dark:text-white dark:bg-black"
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="eventDate" className="text-[#a45731]">Event Date*</label>
                    <input
                      type="date"
                      id="eventDate"
                      name="eventDate"
                      value={formData.eventDate}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border-2 border-[#a45731] rounded-md text-black dark:text-white dark:bg-black"
                      required
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="startTime" className="text-[#a45731]">Start Time*</label>
                    <input
                      type="time"
                      id="startTime"
                      name="startTime"
                      value={formData.startTime}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border-2 border-[#a45731] rounded-md text-black dark:text-white dark:bg-black"
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="endTime" className="text-[#a45731]">End Time*</label>
                    <input
                      type="time"
                      id="endTime"
                      name="endTime"
                      value={formData.endTime}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border-2 border-[#a45731] rounded-md text-black dark:text-white dark:bg-black"
                      required
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="numberOfGuests" className="text-[#a45731]">Expected Number of Guests*</label>
                  <input
                    type="number"
                    id="numberOfGuests"
                    name="numberOfGuests"
                    value={formData.numberOfGuests}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border-2 border-[#a45731] rounded-md text-black dark:text-white dark:bg-black"
                    required
                  />
                </div>

                <div className="space-y-4 text-[#a45731] text-left">
                  <div className="flex items-center gap-2">
                    <input
                      type="checkbox"
                      id="catering"
                      name="catering"
                      checked={formData.catering}
                      onChange={handleChange}
                      className="accent-[#a45731]"
                    />
                    <label htmlFor="catering">Do you need catering?</label>
                  </div>
                  <div className="flex items-center gap-2">
                    <input
                      type="checkbox"
                      id="decorations"
                      name="decorations"
                      checked={formData.decorations}
                      onChange={handleChange}
                      className="accent-[#a45731]"
                    />
                    <label htmlFor="decorations">Do you need decorations?</label>
                  </div>
                  <div className="flex items-center gap-2">
                    <input
                      type="checkbox"
                      id="audioVisual"
                      name="audioVisual"
                      checked={formData.audioVisual}
                      onChange={handleChange}
                      className="accent-[#a45731]"
                    />
                    <label htmlFor="audioVisual">Do you need audio/visual equipment?</label>
                  </div>
                </div>

                <div>
                  <label htmlFor="specialRequirements" className="text-[#a45731]">Other special requirements</label>
                  <textarea
                    id="specialRequirements"
                    name="specialRequirements"
                    value={formData.specialRequirements}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border-2 border-[#a45731] rounded-md text-black dark:text-white dark:bg-black"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full bg-[#a45731] text-white py-2 rounded-md font-semibold transition duration-300 hover:bg-[#8f431d]"
                >
                  Submit
                </button>
              </form>
            </div>
          )}
        </div>
      </section>
    </>
  );
};

export default PrivateEvents;
