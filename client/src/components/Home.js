import React from 'react';
import { Link } from 'react-router-dom';
import SearchBar from './SearchBar';
import Trending from './Trending';
import { useAuth0 } from '@auth0/auth0-react';

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
  const { isAuthenticated } = useAuth0();
  console.log(isAuthenticated)

  return (
    <nav className="navbar navbar-expand-lg navbar-light navbar-color p-3 ">
      <div className="container-fluid d-flex justify-content-end">
        <div className="navbar-nav">
          <Link className="nav-link nav-style" to="/">Home</Link>
          <Link className="nav-link" to="/proposals">Proposals</Link>
          <Link className="nav-link" to="/browse">Browse</Link>
          <Link className="nav-link" to="/about">About</Link>
          {isAuthenticated ? 
            <div>
              <Link className="nav-link" to="/dashboard">Dashboard</Link>
              <LogoutButton />
            </div> :
            <div>
              <LoginButton />
              <SignupButton />
            </div>
          }
          
          
        </div>
      </div>
    </nav>
  );
}

const LoginButton = () => {
  const { isAuthenticated, loginWithRedirect } = useAuth0();

  return !isAuthenticated && (
    <button className="btn" style={{'marginRight': '10px'}} onClick={() => loginWithRedirect()}>Login</button>
  );
}

const SignupButton = () => {
  const { isAuthenticated, loginWithRedirect } = useAuth0();

  return !isAuthenticated && (
    <button className="btn" onClick={() => loginWithRedirect({screen_hint: 'signup'})}>Signup</button>
  );
}

const LogoutButton = () => {
  const { isAuthenticated, logout } = useAuth0();

  return isAuthenticated && (
    <button className="btn" onClick={() => {
      logout({ returnTo: window.location.origin });
    }}>Log out</button>
  )
}

export default Home;