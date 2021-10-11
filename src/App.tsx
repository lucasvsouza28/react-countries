import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { Header, Card } from './components'
import { HomePage } from './pages/Home';
import { CountryPage } from './pages/Country';

function App() {
  return (
    <>
        
        <BrowserRouter>
          <Header />
        {/* <Switch> */}
          <Route path='/' exact component={HomePage} />
          <Route path='/:code' exact component={CountryPage} />        
        {/* </Switch> */}
      </BrowserRouter>
    </>
  );
}

export default App;
