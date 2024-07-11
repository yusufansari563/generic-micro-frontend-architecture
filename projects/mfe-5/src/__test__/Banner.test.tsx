import React from 'react';
import { render, screen } from '@testing-library/react';
import Banner from '../Banner';

test('renders learn react link', () => {
  render(<Banner />);
  const linkElement = screen.getByText(/App 2/i);
  expect(linkElement).toBeInTheDocument();
});
