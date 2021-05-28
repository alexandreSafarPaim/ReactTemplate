import { ThemeProvider } from 'styled-components';
import { theme } from '../src/styles/theme';
import { GlobalStyles } from '../src/styles/global-styles';

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  backgrounds: {
    default: 'primary',
    values: [
      {
        name: 'primary',
        value: theme.color.primary,
      },
      {
        name: 'secondary',
        value: theme.color.secondary,
      },
    ],
  },
};

export const decorators = [
  (Story) => (
    <ThemeProvider theme={theme}>
      <Story />
      <GlobalStyles />
    </ThemeProvider>
  ),
];
