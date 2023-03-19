import { render, screen } from '@testing-library/react';
import Header from 'components/Header';

describe('Header', () => {
  it('', () => {
    render(<Header />);
    expect(screen.getByText(/main/i)).toBeCalled();
  });
});
