import React, { Component } from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import About from "./components/About";
import Header from "./components/Header";
import Sidebar from "./containers/Sidebar";
import ProjectContainer from "./containers/ProjectContainer";
import Login from "./components/Login";
import Signup from "./components/Signup";

class App extends Component {

  state = {
    login: true
  }

  render() {
    return (
      <Router>
        <Header login={this.state.login} />
        <Switch>
          <Route path='/about' component={About} />
          <Route path='/login' component={Login} />
          <Route path='/signup' component={Signup} />
          <div className='home-container'>
            <Sidebar />
            <ProjectContainer />
          </div>
        </Switch>
      </Router>
    );
  }
}

export default App;
