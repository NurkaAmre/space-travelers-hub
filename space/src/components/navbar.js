import { NavLink } from 'react-router-dom';

const Navbar = () => (
  <header className="top-section d-flex">
    <nav>
      <NavLink to="/" className="logo"><img src='./assets/planet2'/>Space Travellers Hub</NavLink>
      <NavLink to="/" className="">Rocketss</NavLink>
      <NavLink to="/categories" className="d-flex arip">Missions</NavLink>
      <NavLink to="/categories" className="d-flex arip">Missions</NavLink>My profile
    </nav>
  </header>
);

export default Navbar;