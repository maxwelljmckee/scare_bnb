import React from 'react';
import { Link } from 'react-router-dom';

import UserMenu from './UserMenu'
import DevDropDown from "./DevDropDown"

import spookyBoi from '../../../media/logo-full-black.png'

import './NavBar.css'

const NavBar = ({ authenticated, setAuthenticated }) => {
  return (
    <nav>
      <div className="navbar__left">
        <Link to="/"> <img className="navbar__logo" src={spookyBoi} /> </Link>

      </div>
      {/* <div className="navbar__center">
      </div> */}
      <div className="navbar__right">
        <DevDropDown />
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
