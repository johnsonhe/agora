import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useAuth0 } from '@auth0/auth0-react';

// import contract abi
import AGOToken from '../build/contracts/AGOToken.json';

function Dashboard(props) {
  const { user } = useAuth0();
  const [contract, setContract] = useState();
  const web3 = props.web3;

  useEffect(() => {
    async function loadContracts() {
      let agoToken = new web3.eth.Contract(AGOToken.abi, AGOToken.networks[5777].address);
      console.log(agoToken)
    }

    loadContracts();
  })

  /**
   * calls mint token function on AGOToken smart contract
   */
  const handleFinish = () => {

  }

  return (
    <section className="home">
      <HomeNavbar />
      <div className="container-fluid">
        <div className="row">
          <div className="col m-5">
            <p>Course content goes here. When user completes the intro course, they click this button, and are minted a fresh set of new tokens, which they can use to take actual courses!</p>
            <button className="btn btn-primary btn-lg m-3" onClick={handleFinish}>Finish Introductory Course</button>
          </div>
        </div>
      </div>
    </section>
  );
}

  const HomeNavbar = () => {
    return (
      <nav className="navbar navbar-expand-lg navbar-light navbar-color">
        <div className="container-fluid">
          <div className="navbar-nav">
            <Link className="nav-link" to="/">Home</Link>
            <Link className="nav-link" to="/proposals">Proposals</Link>
            <Link className="nav-link" to="/browse">Browse</Link>
            <Link className="nav-link" to="/about">About</Link>
            <Link className="nav-link" to="/dashboard">Dashboard</Link>
          </div>
        </div>
      </nav>
    );
  }

  export default Dashboard;