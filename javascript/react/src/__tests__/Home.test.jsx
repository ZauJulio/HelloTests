import React from 'react';
import { render, screen } from '@testing-library/react';
import Home from '../pages/Home';

test('renders example title', () => {
  render(<Home />);
  const titleElement = screen.getByText(/ReactJs/i);
  expect(titleElement).toBeInTheDocument();
});
