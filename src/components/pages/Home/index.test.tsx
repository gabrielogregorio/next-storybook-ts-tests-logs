import { render, screen } from '@testing-library/react';
import Home from '@/pages/index';

describe('Index', () => {
  it('should render correctly', () => {
    render(<Home />);
    expect(screen).toMatchSnapshot();
  });
});
