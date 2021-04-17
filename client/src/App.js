import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

// import components
import Home from './components/Home';
import Proposals from './components/Proposals';
import About from './components/About';
import Browse from './components/Browse';
import Dashboard from './components/Dashboard';

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path = "/Dashboard">
            <Dashboard />
          </Route>
          <Route path = "/About">
            <About />
          </Route>
          <Route path = "/Browse">
            <Browse />
          </Route>
          <Route path = "/Proposals">
            <Proposals />
          </Route>
          <Route exact path="/">
            <Home />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
