import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import {useState, useEffect } from 'react';
import Web3 from 'web3';

// import components
import Home from './components/Home';
import Proposals from './components/Proposals';
import About from './components/About';
import Browse from './components/Browse';
import Dashboard from './components/Dashboard';

function App() {
  const [web3, setWeb3] = useState(null);

  useEffect(() => {
    /**
     * Load web3 provider from dapp browser and set it in component state
     */
    async function loadWeb3() {
      // modern dapp browser
      if(window.ethereum) {
        setWeb3(new Web3(window.ethereum));
        try {
          await window.ethereum.enable();
        } catch (error) {
          // user denied account access
          window.alert('Please allow account access');
        }
        // legacy dapp browser
      } else if (window.web3) {
        setWeb3(new Web3(window.web3.currentProvider))
      } else {
        window.alert('Non-Ethereum browser detected. You should consider trying MetaMask!');
      }
    }

    loadWeb3();
  }, [window.ethereum, window.web3.currentProvider]);

  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/Dashboard">
            <Dashboard web3={web3} />
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
