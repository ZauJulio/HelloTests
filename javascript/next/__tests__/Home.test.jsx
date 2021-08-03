import React from 'react';
import { render, screen } from '@testing-library/react';
import Home from '../pages/index.js';

test('renders example title', () => {
  render(<Home />);
  const titleElement = screen.getByText(/Nextjs/i);
  expect(titleElement).toBeInTheDocument();
});
