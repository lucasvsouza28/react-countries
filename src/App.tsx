import { BrowserRouter, Route } from 'react-router-dom';
import GlobalStyles from './global.styles';
import { Header } from './components'
import { HomePage } from './pages/Home';
import { CountryPage } from './pages/Country';
import { useState } from 'react';
import { DefaultTheme, ThemeProvider } from 'styled-components';
import { DarkTheme } from './themes';

function App() {
  const [theme, setTheme] = useState<DefaultTheme>(DarkTheme);

  return (
    <>
        <BrowserRouter>
          <ThemeProvider
            theme={theme}
          >
            <GlobalStyles />
            <Header
              theme={theme}
              setTheme={setTheme}
            />
            <Route path='/' exact component={HomePage} />
            <Route path='/:code' component={CountryPage} />
          </ThemeProvider>
        </BrowserRouter>
    </>
  );
}

export default App;
