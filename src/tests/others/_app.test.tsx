import { render, screen } from '@testing-library/react';
import App from '@/pages/_app';

const MyComponent = (props) => {
  return <h1>{props.children}</h1>;
};

describe('__app', () => {
  it('should render correctly', () => {
    render(<App Component={MyComponent} pageProps={{ children: 'my Title' }} />);
    screen.getByRole('heading', { name: 'my Title' });
  });
});
