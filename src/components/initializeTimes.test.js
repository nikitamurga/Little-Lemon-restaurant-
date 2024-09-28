// initializeTimes.test.js
import { initializeTimes, updateTimes } from './path_to_your_functions_file'; // Укажите правильный путь к файлу с этими функциями

test('initializeTimes возвращает ожидаемое значение', () => {
    const expectedTimes = ["17:00", "18:00", "19:00", "20:00", "21:00", "22:00"]; // Укажите ожидаемые значения
    const result = initializeTimes();
    expect(result).toEqual(expectedTimes);
});

test('updateTimes возвращает новое состояние на основе переданного времени', () => {
    const previousState = ["17:00", "18:00", "19:00"];
    const newTime = "20:00";
    const result = updateTimes(previousState, { type: "UPDATE_TIME", payload: newTime });

    // Здесь измените ожидаемый результат на то, что реально должен возвращать updateTimes
    expect(result).toContain(newTime);
});
