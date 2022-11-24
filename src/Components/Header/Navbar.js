import React from 'react';
import { NavLink } from 'react-router-dom';
import Planet from '../../assets/planet.png';
import './Navbar.css';
import '../../App.css';

const Navbar = () => {

  return (
    <header>
      <nav className="container flex">
        <div className="head-logo flex">
          <img className="img" src={Planet} alt="SpaceX Logo" />
          <h1>Space Travelers Hub</h1>
        </div>
        <ul className="nav-items flex">
          <li>
            <NavLink to="/">Rockets</NavLink>
          </li>
          <li>
            <NavLink to="/Missions">Missions</NavLink>
          </li>
          <li>
            <NavLink to="/MyProfile">My Profile</NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Navbar;