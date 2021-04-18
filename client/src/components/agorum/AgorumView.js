import React, { useState } from 'react';
import { useParams } from 'react-router';
import { Link } from 'react-router-dom';
import axios from 'axios'
import Course from './Course'
import Forum from './Forum'

export default function AgorumView() {
    const [agorum, setAgorum] = useState(0)
    const agorumid = useParams();
    console.log(agorumid)

    axios.get(`http://localhost:8000/api/agorum/${agorumid.id}`)
      .then(res => {
        var stuff = res.data;
        setAgorum(stuff)
      })

    console.log(agorum)

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

    return (
      <div>
        <HomeNavbar />
        <h1>{agorum.name}</h1>
        <Course />
        <Forum />
      </div>
    )
}
