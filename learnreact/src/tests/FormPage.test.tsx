import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { MemoryRouter } from 'react-router-dom';
import FormPage from '../pages/FormPage';

describe('testing About component', () => {
  it('display the header', () => {
    render(
      <MemoryRouter>
        <FormPage />
      </MemoryRouter>
    );
    expect(screen.getByText('Add User')).toBeInTheDocument();
  });
});
