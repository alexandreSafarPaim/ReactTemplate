import { screen } from '@testing-library/react';
import Menu from './';
import { renderTheme } from '../../styles/render-theme';
import { theme } from '../../styles/theme';

test('Example test', () => {
  const { debug } = renderTheme(<Menu>learn react</Menu>);
  const container = screen.getByText(/learn react/);
});
