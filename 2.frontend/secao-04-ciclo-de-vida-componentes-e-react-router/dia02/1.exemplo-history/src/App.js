import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import Welcome from './pages/Welcome';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={ Home } />
          <Route path="/welcome" component={ Welcome } />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
