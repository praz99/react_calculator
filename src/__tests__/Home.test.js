import React from 'react';
import { render, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Home from '../layouts/Home';

afterEach(cleanup);

it('should display the heading', () => {
  const { getByTestId } = render(<Home />);
  expect(getByTestId('home-heading')).toHaveTextContent('Welcome to our page!');
});

it('should display the first text paragraph', () => {
  const { getByTestId } = render(<Home />);
  expect(getByTestId('para-1')).toHaveTextContent(/Lorem ipsum/i);
});
