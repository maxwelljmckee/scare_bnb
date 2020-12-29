import React from 'react';
import { NavLink, Link } from 'react-router-dom';

import LogoutButton from '../auth/LogoutButton';
import LoginFormModal from '../auth/LoginFormModal'
import SignUpFormModal from '../auth/SignUpFormModal'

import UserMenu from './UserMenu'

import './NavBar.css'

const NavBar = ({ authenticated, setAuthenticated }) => {
  return (
    <nav>
      <Link to="/"> <img src="./logos/logo-full-black.png" /> </Link>

      <div> Search Bar Placeholder</div>

      <button> Become a host </button>

      <UserMenu authenticated={authenticated} setAuthenticated={setAuthenticated} />



    </nav>
  );
}

export default NavBar;
