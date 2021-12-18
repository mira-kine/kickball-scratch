import { render } from '@testing-library/react';
import Teams from './Teams';

test('renders list of teams correctly', () => {
  const container = render(<Teams />);
  expect(container).toMatchSnapshot();
});
