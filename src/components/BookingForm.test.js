// BookingForm.test.js
import { render, screen, cleanup } from "@testing-library/react";
import BookingForm from './BookingForm';

// Очищаем после каждого теста
afterEach(cleanup);

test('Отображение заголовка BookingForm', () => {
    render(<BookingForm />);
    // Найдите элемент заголовка, который должен быть в вашем компоненте BookingForm
    const headingElement = screen.getByText("Book a Table"); // Здесь укажите точный текст, который есть в компоненте
    expect(headingElement).toBeInTheDocument();
});
