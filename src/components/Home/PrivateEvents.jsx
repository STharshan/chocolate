import React, { useState, useEffect } from 'react';
import { FaBirthdayCake, FaHeart, FaGift, FaBuilding } from 'react-icons/fa';
import AOS from 'aos';
import 'aos/dist/aos.css'; // Import AOS styles

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

  const [isFormVisible, setIsFormVisible] = useState(false); // State for showing the form

  // Handle input changes
  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: type === 'checkbox' ? checked : value,
    }));
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData); // You can replace this with form submission logic
  };

  useEffect(() => {
    // Initialize AOS when the component is mounted
    AOS.init({
      duration: 1000, // Animation duration
      easing: 'ease-in-out', // Easing for animation
      once: true, // Trigger animation only once
    });
  }, []);

  return (
    <section className="bg-black py-16 px-6">
      <div className="max-w-screen-xl mx-auto text-center">
        {/* Heading */}
        <h2 
          className="text-3xl font-extrabold text-[#a45731] mb-8"
          data-aos="fade-up" // Add fade-up animation to the heading
        >
          Private Functions & Events
        </h2>
        <p 
          className="text-lg text-white mb-12"
          data-aos="fade-up"  // Add fade-up animation to the subheading
          data-aos-delay="200" // Optional delay for staggered effect
        >
          Perfect spaces for your special occasions
        </p>
        
        {/* Event Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Event Card 1 */}
          <div 
            className="bg-white p-6 rounded-lg shadow-lg text-center border-4 border-[#a45731] hover:scale-105 transition transform duration-300 ease-in-out"
            data-aos="fade-up"  // Add fade-up animation to the first card
            data-aos-delay="400" // Delay for staggered effect
          >
            <div className="flex justify-center mb-4">
              <FaBirthdayCake className="w-16 h-16 text-[#a45731]" />
            </div>
            <h3 className="text-xl font-semibold text-[#a45731]">Children's Parties</h3>
            <p className="text-gray-600">Chocolate-themed celebrations that kids will never forget</p>
          </div>
          
          {/* Event Card 2 */}
          <div 
            className="bg-white p-6 rounded-lg shadow-lg text-center border-4 border-[#a45731] hover:scale-105 transition transform duration-300 ease-in-out"
            data-aos="fade-up"  // Add fade-up animation to the second card
            data-aos-delay="600" // Delay for staggered effect
          >
            <div className="flex justify-center mb-4">
              <FaHeart className="w-16 h-16 text-[#a45731]" />
            </div>
            <h3 className="text-xl font-semibold text-[#a45731]">Date Nights</h3>
            <p className="text-gray-600">Romantic settings perfect for intimate chocolate experiences</p>
          </div>
          
          {/* Event Card 3 */}
          <div 
            className="bg-white p-6 rounded-lg shadow-lg text-center border-4 border-[#a45731] hover:scale-105 transition transform duration-300 ease-in-out"
            data-aos="fade-up"  // Add fade-up animation to the third card
            data-aos-delay="800" // Delay for staggered effect
          >
            <div className="flex justify-center mb-4">
              <FaGift className="w-16 h-16 text-[#a45731]" />
            </div>
            <h3 className="text-xl font-semibold text-[#a45731]">Anniversaries</h3>
            <p className="text-gray-600">Celebrate milestones with our special anniversary packages</p>
          </div>
          
          {/* Event Card 4 */}
          <div 
            className="bg-white p-6 rounded-lg shadow-lg text-center border-4 border-[#a45731] hover:scale-105 transition transform duration-300 ease-in-out"
            data-aos="fade-up"  // Add fade-up animation to the fourth card
            data-aos-delay="1000" // Delay for staggered effect
          >
            <div className="flex justify-center mb-4">
              <FaBuilding className="w-16 h-16 text-[#a45731]" />
            </div>
            <h3 className="text-xl font-semibold text-[#a45731]">Corporate Events</h3>
            <p className="text-gray-600">Business meetings with a sweet twist that impresses clients</p>
          </div>
        </div>
        
        {/* Contact Form Button */}
        <div className="mt-16">
          <button
            onClick={() => setIsFormVisible(!isFormVisible)} // Toggle form visibility
            className="bg-[#a45731] text-white py-3 px-6 rounded-md font-semibold transition duration-300 hover:bg-[#a45731] mb-8"
            data-aos="fade-up"  // Add fade-up animation to the button
            data-aos-delay="1200" // Delay for staggered effect
          >
            {isFormVisible ? 'Hide Contact Form' : 'Get in Touch to Book Your Event'}
          </button>
        </div>

        {/* Contact Form */}
        {isFormVisible && (
          <div className="p-8 rounded-lg shadow-lg bg-white" data-aos="fade-up">
            <h3 className="text-2xl font-bold text-[#a45731] mb-6">Get in Touch to Book Your Event</h3>
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Contact Information */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="fullName" className="text-[#a45731]">Full Name:</label>
                  <input
                    type="text"
                    id="fullName"
                    name="fullName"
                    value={formData.fullName}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border-2 border-[#a45731] bg-black text-white rounded-md"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="phoneNumber" className="text-[#a45731]">Phone Number:</label>
                  <input
                    type="text"
                    id="phoneNumber"
                    name="phoneNumber"
                    value={formData.phoneNumber}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border-2 border-[#a45731] bg-black text-white rounded-md"
                    required
                  />
                </div>
              </div>

              {/* Event Details */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="eventType" className="text-[#a45731]">Event Type:</label>
                  <input
                    type="text"
                    id="eventType"
                    name="eventType"
                    value={formData.eventType}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border-2 border-[#a45731] bg-black text-white rounded-md"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="eventDate" className="text-[#a45731]">Event Date:</label>
                  <input
                    type="date"
                    id="eventDate"
                    name="eventDate"
                    value={formData.eventDate}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border-2 border-[#a45731] bg-black text-white rounded-md"
                    required
                  />
                </div>
              </div>

              {/* Start and End Time */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="startTime" className="text-[#a45731]">Start Time:</label>
                  <input
                    type="time"
                    id="startTime"
                    name="startTime"
                    value={formData.startTime}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border-2 border-[#a45731] bg-black text-white rounded-md"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="endTime" className="text-[#a45731]">End Time:</label>
                  <input
                    type="time"
                    id="endTime"
                    name="endTime"
                    value={formData.endTime}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border-2 border-[#a45731] bg-black text-white rounded-md"
                    required
                  />
                </div>
              </div>

              {/* Number of Guests */}
              <div>
                <label htmlFor="numberOfGuests" className="text-[#a45731]">Expected Number of Guests:</label>
                <input
                  type="number"
                  id="numberOfGuests"
                  name="numberOfGuests"
                  value={formData.numberOfGuests}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border-2 border-[#a45731] bg-black text-white rounded-md"
                  required
                />
              </div>

              {/* Services */}
              <div className="space-y-4 text-[#a45731]">
                <div className="flex items-center gap-2">
                  <input
                    type="checkbox"
                    id="catering"
                    name="catering"
                    checked={formData.catering}
                    onChange={handleChange}
                    className="text-[#a45731]"
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
                    className="text-[#a45731]"
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
                    className="text-[#a45731]"
                  />
                  <label htmlFor="audioVisual">Do you need audio/visual equipment?</label>
                </div>
              </div>

              {/* Special Requirements */}
              <div>
                <label htmlFor="specialRequirements" className="text-[#a45731]">Other special requirements:</label>
                <textarea
                  id="specialRequirements"
                  name="specialRequirements"
                  value={formData.specialRequirements}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border-2 border-[#a45731] bg-black text-white rounded-md"
                ></textarea>
              </div>

              {/* Submit Button */}
              <button type="submit" className="w-full bg-[#a45731] text-white py-2 rounded-md font-semibold transition duration-300 hover:bg-[#a45731]">
                Submit
              </button>
            </form>
          </div>
        )}
      </div>
    </section>
  );
};

export default PrivateEvents;
