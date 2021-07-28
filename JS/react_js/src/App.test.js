import { render, screen } from '@testing-library/react';
import App from './App';

// API REF: https://testing-library.com/docs/react-testing-library/api

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
