import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { MemoryRouter } from 'react-router-dom';
import InputSearch from '../components/InputSearch';

describe('testing InputSearch component', () => {
  it('display the search', () => {
    render(
      <MemoryRouter>
        <InputSearch getstor={''} />
      </MemoryRouter>
    );
    expect(screen.getByTestId('search')).toBeInTheDocument();
  });
});
