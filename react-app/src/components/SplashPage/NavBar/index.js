import React from 'react';
import { Link } from 'react-router-dom';

import UserMenu from './UserMenu'
import DevDropDown from "./DevDropDown"

import spookyBoi from '../../../media/logo-full-black.png'

import './NavBar.css'

const GitHubButton = () => {
  return (
    <div className='github-button'>
      <i style={{ marginRight: "5px", fontSize: '164x',  }} className="fab fa-github"></i>
      <a href='https://github.com/maxwelljmckee/scare_bnb' target='_blank'>
        See the Code!</a>
    </div>
  )
}

const NavBar = ({ authenticated, setAuthenticated }) => {
  return (
    <nav>
      <div className="navbar__left">
        <Link to="/"> <img className="navbar__logo" src={spookyBoi} /> </Link>

      </div>
      {/* <div className="navbar__center">
      </div> */}
      <div className="navbar__right">
        <GitHubButton />
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
