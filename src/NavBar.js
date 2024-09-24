import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const NavBar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-logo">Code studio</div>
      <ul className="navbar-links">
        <li><Link to="/">Explore</Link></li>
        <li><Link to="/Practise">Practise</Link></li> 
        <li><Link to="/Codes Problem">Codes Problem</Link></li> 
        <li><Link to="/Discuss">Discuss</Link></li>
        <li><Link to="/Contact">Contact</Link></li>  
        <button id='signbtn'>Sign in </button>
      </ul>
    </nav>
  );
};

export default NavBar;
