import React, { Component } from "react";
import Project from "../components/Project";

class ProjectContainer extends Component {
  state = {
    projectList: [
      { name: 'Project1'},
      { name: 'Project2'},
      { name: 'Project3'}
    ]
  };

  handleClick = () => {
    this.setState({
      projectList: [{ name: "New Project" }, ...this.state.projectList]
    });
    // console.log('hello')
  };

  render() {
    return (
      <div className='project-container'>
        <div>
          <h2>All Projects</h2>
        </div>
          <Project projects={this.state.projectList} handleClick={this.handleClick} />
      </div>
    );
  }
}

export default ProjectContainer;
