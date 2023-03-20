import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { MemoryRouter } from 'react-router-dom';
import About from '../pages/About';

describe('testing About component', () => {
  it('display the header', () => {
    render(
      <MemoryRouter>
        <About />
      </MemoryRouter>
    );
    expect(screen.getByText('About')).toBeInTheDocument();
  });
});
