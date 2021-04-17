import React from 'react';
import { Link } from 'react-router-dom';
import SearchBar from './SearchBar';
import Trending from './Trending';

function Home() {
  return (
    <section className="home">

      <HomeNavbar />
      <div className="container">
        <div className="row">
          <h1 className="Agora_title">agora.</h1>
          <SearchBar />
        </div>
        <div className="row">
          <Trending />
        </div>
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
        </div>
      </div>
    </nav>
  );
}

export default Home;