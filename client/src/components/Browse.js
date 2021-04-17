import React from 'react';
import { Link } from 'react-router-dom';

function Browse() {
    return (
      <section className="home">
  
        <HomeNavbar />
        <div className="container">
        </div>
      </section>
    )
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

  export default Browse;