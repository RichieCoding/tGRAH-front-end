import React, { Component } from 'react'

class Sidebar extends Component {
  render() {
    return (
      <div className="sidebar-container">
        <div className='teams-wrapper'>
          <h2>Teams</h2>
          <h4><a href="https://github.com/RichieCoding" target='_blank'> Mod 1 Project</a></h4>
          <h4><a href="https://github.com/Lexscher" target='_blank'> Mod 2 Project</a></h4>
          <h4><a href="https://github.com/Ghalstein" target='_blank'> Mod 3 Project</a></h4>
        </div>
        <div className='friends-wrapper'>
          <h2>Friends</h2>
          <h4><a href="https://www.linkedin.com/in/garrett-halstein-472b3b156/" target="_blank">Garrett</a></h4>
          <h4><a href="https://www.linkedin.com/in/alexanderschelchere/" target="_blank">Alex</a></h4>
          <h4><a href="https://www.linkedin.com/in/richard-li-3a5835186/" target="_blank">Richard</a></h4>
        </div>
      </div>
    )
  }
}

export default Sidebar
