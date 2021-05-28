import { screen } from '@testing-library/react';
import <FTName> from './';
import { renderTheme } from '../../styles/render-theme';
import { theme } from '../../styles/theme';

test('Example test', () => {
  const {debug} = renderTheme(<<FTName>>learn react</<FTName>>);
  const container = screen.getByText(/learn react/);
});
