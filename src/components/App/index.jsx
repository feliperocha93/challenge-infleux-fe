import { createContext, useState } from 'react';

import { ThemeProvider } from 'styled-components';
import { BrowserRouter } from 'react-router-dom';

import GlobalStyles from '../../styles/global';
import theme from '../../styles/theme';

import { Container } from './styles';

import Header from '../Header';

import Routes from '../../routes';

export const Context = createContext();

function App() {
  const [state, setState] = useState({});

  return (
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <Context.Provider value={{ state, setState }}>
          <GlobalStyles />
          <Container>
            <Header />
            <Routes />
          </Container>
        </Context.Provider>
      </ThemeProvider>
    </BrowserRouter>
  );
}

export default App;
