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
    submitForm(formData); // Отправляем данные формы
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="date">Выберите дату</label>
      <input
        type="date"
        id="date"
        name="date"
        value={formData.date}
        onChange={handleChange}
      />

      <label htmlFor="time">Выберите время</label>
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

      <label htmlFor="guests">Количество гостей</label>
      <input
        type="number"
        id="guests"
        name="guests"
        value={formData.guests}
        min="1"
        max="10"
        onChange={handleChange}
      />

      <label htmlFor="occasion">Событие</label>
      <select
        id="occasion"
        name="occasion"
        value={formData.occasion}
        onChange={handleChange}
      >
        <option value="Birthday">День рождения</option>
        <option value="Anniversary">Годовщина</option>
      </select>

      <button type="submit">Забронировать</button>
    </form>
  );
}

export default BookingForm;
