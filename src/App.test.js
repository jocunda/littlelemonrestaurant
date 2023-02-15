import { fireEvent, render, screen } from '@testing-library/react';
import BookingPage from './components/BookingPage';
import UpdateTimes from './components/UpdateTimes';


test('Renders the BookingPage component', () => {
  render(<BookingPage />);
  const headingElement = screen.getByText("Make Your Reservation");
  expect(headingElement).toBeInTheDocument();
});

describe('UpdateTimes component', () => {
  test('renders without errors', () => {
    render(<UpdateTimes />);
    const dateInput = screen.getByLabelText(/choose date/i);
    const timeSelect = screen.getByLabelText(/choose time/i);
    expect(dateInput).toBeInTheDocument();
    expect(timeSelect).toBeInTheDocument();
  });

  test('updates available times when date is changed', () => {
    render(<UpdateTimes />);
    const dateInput = screen.getByLabelText(/choose date/i);
    const timeSelect = screen.getByLabelText(/choose time/i);

    fireEvent.change(dateInput, { target: { value: '2023-02-15' } });
    expect(timeSelect.children).toHaveLength(2);


    fireEvent.change(dateInput, { target: { value: '2023-02-16' } });
    expect(timeSelect.children).toHaveLength(2);


    fireEvent.change(dateInput, { target: { value: '2023-02-17' } });
    expect(timeSelect.children).toHaveLength(3);

  });
});

