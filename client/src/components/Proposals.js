import React from 'react';
import { Link } from 'react-router-dom';
import Proposal_form from './Proposal_form';
import CourseList from './CourseList';


function Proposals() {
    return (
      <section className="proposals">
        <div className="container">
            <Proposal_form />
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

  export default Proposals;