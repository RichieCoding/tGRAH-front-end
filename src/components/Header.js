import React, { Component } from 'react';
import {Link} from 'react-router-dom';

class Header extends Component {
  render() {
    return (
      <nav className="header">
        <div className="header-container">
          <h1>Trello Clone</h1>
          <ul>
            <li>Home</li>
            <li>Boards</li>
            <li><Link to="/about">About</Link></li>
          </ul>
        </div>
      </nav>
    )
  }
}

export default Header
