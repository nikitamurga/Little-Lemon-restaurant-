import React, { useReducer } from 'react';
import BookingForm from './BookingForm';

function Main() {
  function initializeTimes() {
    return ['17:00', '18:00', '19:00', '20:00', '21:00', '22:00'];
  }

  function updateTimes(state, action) {
    switch (action.type) {
      case 'UPDATE_TIMES':
        return state;
      default:
        return state;
    }
  }

  const [availableTimes, dispatch] = useReducer(updateTimes, initializeTimes());

  return (
    <main>
      <BookingForm availableTimes={availableTimes} dispatch={dispatch} />
    </main>
  );
}

export default Main;
