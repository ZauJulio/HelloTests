import React from 'react';
import { render, screen } from '@testing-library/react';
import Home from '../pages/';

test('renders example title', () => {
  render(<Home />);
  const titleElement = screen.getByText(/Nextjs - Typescript/i);
  expect(titleElement).toBeInTheDocument();
});
