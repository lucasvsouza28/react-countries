import { BrowserRouter, Route } from 'react-router-dom';
import { Header } from './components'
import { HomePage } from './pages/Home';
import { CountryPage } from './pages/Country';

function App() {
  return (
    <>
        <BrowserRouter>
          <Header />
          <Route path='/' exact component={HomePage} />
          <Route path='/:code' component={CountryPage} />
        </BrowserRouter>
    </>
  );
}

export default App;
