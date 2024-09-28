import { useNavigate } from 'react-router-dom';
import { fetchAPI, submitAPI } from '../api';
import BookingForm from './BookingForm';
import { useReducer } from 'react';

function initializeTimes() {
  const today = new Date();
  return fetchAPI(today);
}

function updateTimes(state, action) {
  switch (action.type) {
    case 'UPDATE_TIMES':
      return fetchAPI(action.date);
    default:
      return state;
  }
}

function BookingPage() {
  const [availableTimes, dispatch] = useReducer(updateTimes, [], initializeTimes);
  const navigate = useNavigate(); // Используем хук useNavigate

  // Функция для отправки формы
  function submitForm(formData) {
    if (submitAPI(formData)) {
      navigate('/confirmed'); // Перейти на страницу подтверждения
    }
  }

  return (
    <div>
      <h2>Забронировать столик</h2>
      <BookingForm availableTimes={availableTimes} dispatch={dispatch} submitForm={submitForm} />
    </div>
  );
}

export default BookingPage;
