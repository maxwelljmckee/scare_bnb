import React from 'react';
import { Link } from 'react-router-dom';

import UserMenu from './UserMenu'

import './NavBar.css'

const NavBar = ({ authenticated, setAuthenticated }) => {
  return (
    <nav>
      <div className="navbar__left">
        <Link to="/"> <img className="navbar__logo" src="/media/logo-full-black.png" /> </Link>

      </div>
      <div className="navbar__center">
        <div style={{ width: "300px", height: "40px", borderRadius: "20px", border: "1px solid black", textAlign: "center" }}> Search Bar Placeholder</div>

      </div>
      <div className="navbar__right">
        {authenticated && (
          <Link className="navbar__link" to="/listings/create">
            Become a host
          </Link>
        )}

        <UserMenu authenticated={authenticated} setAuthenticated={setAuthenticated} />
      </div>
    </nav>
  );
}

export default NavBar;
