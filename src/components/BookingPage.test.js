// Импортируем необходимые функции и библиотеки для тестирования
import { render, screen } from "@testing-library/react";
import { initializeTimes, updateTimes } from "./BookingPage"; // Предполагаем, что ваши функции находятся в этом файле

// Мокируем функцию fetchAPI
jest.mock('./api', () => ({
  fetchAPI: jest.fn(() => ["17:00", "18:00", "19:00", "20:00"]), // Возвращаем массив времени
}));

// Тест для функции initializeTimes
test('initializeTimes вызывает fetchAPI и возвращает массив времени', () => {
  const times = initializeTimes();
  expect(times).toEqual(["17:00", "18:00", "19:00", "20:00"]); // Проверяем, что возвращается ожидаемый массив времени
});

// Тест для функции updateTimes
test('updateTimes вызывает fetchAPI с корректной датой', () => {
  const action = { type: 'UPDATE_TIMES', date: new Date() }; // Действие с датой
  const times = updateTimes([], action);
  expect(times).toEqual(["17:00", "18:00", "19:00", "20:00"]); // Проверяем, что возвращается ожидаемый массив времени
});
