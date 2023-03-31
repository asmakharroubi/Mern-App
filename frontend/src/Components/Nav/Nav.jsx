import React from 'react'
import "./Nav.css"

const Nav = () => {
  return (
    <div>
      <nav class="navbar">
        <ul class="navbar-nav">
          <li class="nav-item">
            <a href="#" class="nav-link">
              Home
            </a>
          </li>
          <li class="nav-item">
            <a href="#" class="nav-link">
              About
            </a>
          </li>
          <li class="nav-item">
            <a href="#" class="nav-link">
              Services
            </a>
          </li>
          <li class="nav-item">
            <a href="#" class="nav-link">
              Contact
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Nav