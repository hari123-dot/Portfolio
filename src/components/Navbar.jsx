import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Navbar.css';

const Navbar = ({ logo }) => {
  const location = useLocation();
  const navItems = [
    { label: 'Home', path: '/' },
    { label: 'About', path: '/About' },
    { label: 'Projects', path: '/Projects' },
    { label: 'Contact', path: '/Contact' },
  ];

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="navbar-brand">
          <img src={logo} alt="Logo" className="navbar-logo" />
          <h2 className="navbar-title">tony stark</h2>
        </div>
        <ul className="navbar-links">
          {navItems.map((item) => (
            <li key={item.path}>
              <Link
                to={item.path}
                className={location.pathname === item.path ? 'active-link' : ''}
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
