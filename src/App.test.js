import { render, screen } from '@testing-library/react';
import App from './App';

test('renders My Reads title', () => {
  render(<App />);
  const linkElement = screen.getByText(/My Reads/i);
  expect(linkElement).toBeInTheDocument();
});
