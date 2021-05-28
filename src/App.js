import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import { GlobalStyles } from './styles/global-styles';
import { theme } from './styles/theme';
import Home from './templates/Home';

function App() {
  return (
    <Router>
      <Switch>
        <ThemeProvider theme={theme}>
          <Route to="/" exact component={Home} />
          <GlobalStyles />
        </ThemeProvider>
      </Switch>
    </Router>
  );
}

export default App;
