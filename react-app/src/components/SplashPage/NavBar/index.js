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
      <div className="navbar__center">
        <DevDropDown />
        {/* <div>Meet the Devs: </div> */}
        {/* <div style={{ width: "300px", height: "40px", borderRadius: "20px", border: "1px solid black", textAlign: "center" }}> Meet the Devs!</div>
        <Link className="nav-devs" to="">
          <p>Sam Stark</p>
        </Link>
        <Link className="nav-devs" to="">
          <p>Maxwell McKee</p>
        </Link>
        <Link className="nav-devs" to="">
          <p>Peter Jesse</p>
        </Link>
        <Link className="nav-devs" to="">
          <p>Mathias Anderson</p>
  </Link> */}
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
