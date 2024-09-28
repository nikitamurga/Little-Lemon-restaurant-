import { render, screen, cleanup } from "@testing-library/react";
import BookingForm from './BookingForm';
import { validateGuests } from './validation';

afterEach(cleanup);

test('Отображение заголовка BookingForm', () => {
    render(<BookingForm />);
    const headingElement = screen.getByText("Book a Table");
    expect(headingElement).toBeInTheDocument();
});


afterEach(cleanup);

test('Проверка наличия атрибута "required" у поля выбора даты', () => {
    render(<BookingForm />);
    const dateInput = screen.getByLabelText(/choose date/i);
    expect(dateInput).toHaveAttribute('required');
  });


afterEach(cleanup);

  test('Проверка корректного количества гостей (валидное значение)', () => {
    expect(validateGuests(3)).toBeTruthy();
  });

afterEach(cleanup);

  test('Проверка некорректного количества гостей (невалидное значение)', () => {
    expect(validateGuests(0)).toBeFalsy();
  });