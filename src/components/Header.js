import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Header extends Component {

  // currentUser = () => {
  //   currentFirstLetter
  // }

  handleClick = () => {
    this.props.logOutUser()
  }

  handleProjectReset = () => {
    this.props.resetCurrentProject()
  }

  render() {
    return (
      <nav className="header">
        <div className="header-container">
          <h1>Chello</h1>
          { this.props.login ?
          <ul>
            <li><Link to="/" className='cool-link' onClick={this.handleProjectReset} style={{color: 'rgb(216, 216, 216)'}}>Home</Link></li>
            <li><Link to="/about" className='cool-link' onClick={this.handleProjectReset} style={{color: 'rgb(216, 216, 216)'}}>About</Link></li>
            <li><Link to='/login' className='cool-link' style={{color: 'rgb(216, 216, 216)'}} onClick={this.handleClick }>Log Out of {this.props.currentUser.username}</Link></li>
          </ul>
          :
          null
          }
        </div>
      </nav>
    )
  }
}

export default Header
