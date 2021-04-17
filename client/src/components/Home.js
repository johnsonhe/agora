import React from 'react';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <section className="home">
      <HomeNavbar />
      <h1>agora.</h1>
    </section>
  )
}

const HomeNavbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container-fluid">
        <div className="navbar-nav">
          <Link className="nav-link" to="/">Home</Link>
          <Link className="nav-link" to="/proposals">Proposals</Link>
          <Link className="nav-link" to="/browse">Browse</Link>
          <Link className="nav-link" to="/about">About</Link>
        </div>
      </div>
    </nav>
  );
}

export default Home;