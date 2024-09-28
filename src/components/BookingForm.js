import React, { useState } from 'react';

function BookingForm({ availableTimes, dispatch, submitForm }) {
  const [formData, setFormData] = useState({
    date: '',
    time: '',
    guests: 1,
    occasion: 'Birthday',
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    submitForm(formData);
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="date">Date</label>
      <input
        type="date"
        id="date"
        name="date"
        value={formData.date}
        onChange={handleChange}
      />

      <label htmlFor="time">Time</label>
      <select
        id="time"
        name="time"
        value={formData.time}
        onChange={handleChange}
      >
        {availableTimes.map((time) => (
          <option key={time} value={time}>{time}</option>
        ))}
      </select>

      <label htmlFor="guests">Guests</label>
      <input
        type="number"
        id="guests"
        name="guests"
        value={formData.guests}
        min="1"
        max="10"
        onChange={handleChange}
      />

      <label htmlFor="occasion">Occasion</label>
      <select
        id="occasion"
        name="occasion"
        value={formData.occasion}
        onChange={handleChange}
      >
        <option value="Birthday">Birthday</option>
        <option value="Anniversary">Anniversary</option>
        <option value="Nothing">No special occasion</option>
      </select>

      <button type="submit">Book</button>
    </form>
  );
}

export default BookingForm;
