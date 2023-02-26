import { render, screen } from '@testing-library/react';
import App from './App';

// required for 'TypeError: window.matchMedia is not a function'
window.matchMedia = window.matchMedia || function() {
  return {
      matches: false,
      addListener: function() {},
      removeListener: function() {}
  };
};

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/Created by Ant/i);
  expect(linkElement).toBeInTheDocument();
});
