import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { BrowserRouter as Router } from 'react-router-dom';
import NavigationBar from './../../src/Navigation/NavigationBar';

test('renders NavigationBar component with logo and user icon', () => {
  render(
    <Router>
      <NavigationBar />
    </Router>
  );

  // Check if the logo image is rendered
  const logoImage = screen.getByAltText('logo');
  expect(logoImage).toBeInTheDocument();
  expect(logoImage.getAttribute('src')).toEqual('LetterR.png');

  // Check if the user icon is rendered and linked to the /profile route
  const userIconLink = screen.getByRole('link', { name: /user/i });
  expect(userIconLink).toBeInTheDocument();
  expect(userIconLink.getAttribute('href')).toEqual('/profile');
});
