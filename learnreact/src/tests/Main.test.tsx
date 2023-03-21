import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { MemoryRouter } from 'react-router-dom';
import Main from '../pages/Main';

describe('testing Main component', () => {
  it('display the main', () => {
    render(
      <MemoryRouter>
        <Main />
      </MemoryRouter>
    );
    expect(screen.getByTestId('page-main')).toBeInTheDocument();
  });
});
