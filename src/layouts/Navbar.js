import React from 'react';
import '../styles/Navbar.css';

const Navbar = () => (
  <div className="navbar">
    <h1 data-testid="navbar-heading">Math Magicians</h1>
    <ul>
      <li>
        <a href="/">Home</a>
      </li>
      <li>
        <a href="/calculator">Calculator</a>
      </li>
      <li>
        <a href="/quote">Quote</a>
      </li>
    </ul>
  </div>
);

export default Navbar;
