import { render, screen } from "@testing-library/react";
import { initializeTimes, updateTimes } from "./BookingPage";


jest.mock('./api', () => ({
  fetchAPI: jest.fn(() => ["17:00", "18:00", "19:00", "20:00"]),
}));


test('initializeTimes вызывает fetchAPI и возвращает массив времени', () => {
  const times = initializeTimes();
  expect(times).toEqual(["17:00", "18:00", "19:00", "20:00"]);
});


test('updateTimes вызывает fetchAPI с корректной датой', () => {
  const action = { type: 'UPDATE_TIMES', date: new Date() };
  const times = updateTimes([], action);
  expect(times).toEqual(["17:00", "18:00", "19:00", "20:00"]);
});
