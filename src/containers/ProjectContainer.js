import React, { Component } from "react";
import Project from "../components/Project";

class ProjectContainer extends Component {
  state = {
    projectList: []
  };

  componentDidMount() {
    fetch(`http://localhost:3000/users/${this.props.currentUser.user_id}`, {
      headers: {
        Authorization: localStorage.token
      }
    })
      .then(resp => resp.json())
      .then(respData => {
        // console.log(data)
        // debugger;
        this.setState({
          projectList: respData.data.attributes.projects
        });
      });
  }

  handleClick = () => {
    this.setState({
      projectList: [{ name: "New Project" }, ...this.state.projectList]
    });
  };

  render() {
    // console.log(this.props.currentUser)
    return (
      <div className='project-container'>
        <div>
          <h2>All Projects</h2>
        </div>
        <Project
          projects={this.state.projectList}
          handleClick={this.handleClick}
        />
      </div>
    );
  }
}

export default ProjectContainer;
