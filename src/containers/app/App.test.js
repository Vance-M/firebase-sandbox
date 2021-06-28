import { render, screen } from '@testing-library/react';
import App from './App';

test('renders learn react link', async () => {
  render(<App />);
  const inputEl =  await screen.findByTestId('gitUser-search');
  const linkElement = screen.getByText(/user/i);
  expect(inputEl).toBeInTheDocument();
  expect(linkElement).toBeInTheDocument();
});
