import { test, expect } from 'vitest';

import { render, screen } from '@testing-library/react';
import App from './App';

test('renders the cake card with correct info', () => {
  render(<App />);

  expect(screen.getByText('Chocolate Cake')).toBeInTheDocument();
  expect(screen.getByText('$24.99')).toBeInTheDocument();
  expect(screen.getByText('4.5/5')).toBeInTheDocument();
});