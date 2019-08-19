import React, { Component } from 'react'
import ListCard from './ListCard'

class ListContainer extends Component {

  state = {
    listCards: [
      {name: 'Create Backend'},
      {name: 'Create Frontend'},
      {name: 'Completed'}
    ]
  }

  handleClick = () => {
    this.setState({
      listCards: [ {name: 'New Taskslakjshdflkajshdflkjahsdflkjhasdflkjhasdflkjhasdflkjhasdflkhjasd'}, ...this.state.listCards ]
    })
  }


  render() {
    return (
      <div className="list-container">
        <ListCard listCards={this.state.listCards}/>
        <div onClick={this.handleClick} className='list-card-container'>
          <h3>Add a List</h3>
        </div>
      </div>
    )
  }
}

export default ListContainer
