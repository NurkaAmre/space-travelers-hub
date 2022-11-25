import { NavLink } from 'react-router-dom';
import './Navbar.css';
import Planet from '../../assets/planet.png';

const NavBar = () => (
  <header className="headerContainer">
    <NavLink to="/" className="logo">
      <div className="logoContainer">
        <img src={Planet} alt="Logo" className="image" />
        <h1>
          Space Travelers&apos; Hub
        </h1>
      </div>
    </NavLink>
    <nav className="navigation">
      <NavLink
        to="/"
      >
        Rockets
      </NavLink>
      <NavLink
        to="missions"
      >
        Missions
      </NavLink>
      <span> | </span>
      <NavLink
        to="myprofile"
      >
        My Profile
      </NavLink>
    </nav>
  </header>

);

export default NavBar;
