import React, { Component } from 'react'
import ListCards from './ListCards'

class ListContainer extends Component {


  state = {
    listCards: this.props.currentProject.lists,
    clicked: false
  }

  // this.props.currentProject.lists.map

  // handleClick = () => {
  //   this.setState({
  //     listCards: [ {name: 'New Taskslakjshdflkajshdflkjahsdflkjhasdflkjhasdflkjhasdflkjhasdflkhjasd'}, ...this.state.listCards ]
  //   })
  // }

  handleClick = () => {
    this.setState({
      clicked: !this.state.clicked
    })
  }


  render() {
    // debugger;
    return (
      <div className="list-container">
        <ListCards listCards={this.state.listCards} loadCurrentProject={this.props.loadCurrentProject}/>
        { !this.state.clicked ?
        <div onClick={this.handleClick} className='list-card-container list-container-add-list-btn'>
          <h3>Add a List</h3>
        </div>
        :
        <form className='list-container-form'>
          <input type="text"/>
          <div className='list-container-form-submit-wrapper'>
            <input type="submit"/>
            <h2 onClick={this.handleClick}>x</h2>
          </div>
        </form>
        }
      </div>
    )
  }
}

export default ListContainer
