import React, { useState } from 'react';
import { FaBirthdayCake, FaHeart, FaGift, FaBuilding } from 'react-icons/fa';

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

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: type === 'checkbox' ? checked : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // handle form submission logic here
    console.log(formData);
  };

  return (
    <section className="bg-black py-16 px-6">
      <div className="max-w-screen-xl mx-auto text-center">
        {/* Heading */}
        <h2 className="text-3xl font-extrabold text-[#a45731] mb-8">
          Private Functions & Events
        </h2>
        <p className="text-lg text-white mb-12">Perfect spaces for your special occasions</p>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Children's Parties */}
          <div className="bg-white p-6 rounded-lg shadow-lg border-4 border-[#a45731]">
            <div className="flex justify-center mb-4">
              <FaBirthdayCake className="w-16 h-16 text-[#a45731]" />
            </div>
            <h3 className="text-xl font-semibold text-[#a45731]">Children's Parties</h3>
            <p className="text-gray-600">Chocolate-themed celebrations that kids will never forget</p>
          </div>
          
          {/* Date Nights */}
          <div className="bg-white p-6 rounded-lg shadow-lg border-4 border-[#a45731]">
            <div className="flex justify-center mb-4">
              <FaHeart className="w-16 h-16 text-[#a45731]" />
            </div>
            <h3 className="text-xl font-semibold text-[#a45731]">Date Nights</h3>
            <p className="text-gray-600">Romantic settings perfect for intimate chocolate experiences</p>
          </div>
          
          {/* Anniversaries */}
          <div className="bg-white p-6 rounded-lg shadow-lg border-4 border-[#a45731]">
            <div className="flex justify-center mb-4">
              <FaGift className="w-16 h-16 text-[#a45731]" />
            </div>
            <h3 className="text-xl font-semibold text-[#a45731]">Anniversaries</h3>
            <p className="text-gray-600">Celebrate milestones with our special anniversary packages</p>
          </div>
          
          {/* Corporate Events */}
          <div className="bg-white p-6 rounded-lg shadow-lg border-4 border-[#a45731]">
            <div className="flex justify-center mb-4">
              <FaBuilding className="w-16 h-16 text-[#a45731]" />
            </div>
            <h3 className="text-xl font-semibold text-[#a45731]">Corporate Events</h3>
            <p className="text-gray-600">Business meetings with a sweet twist that impresses clients</p>
          </div>
        </div>
        
        {/* Contact Form CTA */}
        <div className="mt-16 p-8 rounded-lg shadow-lg bg-white">
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
      </div>
    </section>
  );
};

export default PrivateEvents;
