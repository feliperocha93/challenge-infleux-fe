import { createContext, useState, useEffect } from 'react';

import { ThemeProvider } from 'styled-components';
import { BrowserRouter } from 'react-router-dom';
import CountriesService from '../../services/api/CountriesService';

import GlobalStyles from '../../styles/global';
import theme from '../../styles/theme';

import Header from '../Header';
import Routes from '../../routes';

import { Container } from './styles';

export const Context = createContext();

function App() {
  const [state, setState] = useState({ countries: [] });

  useEffect(() => {
    async function fetchCountries() {
      const countries = await CountriesService.index();
      setState({
        ...state,
        countries,
      });
    }
    fetchCountries();
  }, []);

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
