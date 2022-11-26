import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import Navbar from '../Components/Header/Navbar';

describe('Test for Navbar component', () => {
  test('Renders Navbar correctly', () => {
    const navbar = render(
      <Router>
        <Navbar />
      </Router>,
    );
    expect(navbar).toMatchSnapshot();
  });

  test('Check for heading in the navbar \'Space Traveler\'s Hub\' is in the document', () => {
    render(
      <Router>
        <Navbar />
      </Router>,
    );
    expect(
      screen.getByRole('heading', { name: /Space Travelers' Hub/i }),
    ).toBeInTheDocument();
  });
});
