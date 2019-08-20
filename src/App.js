import React, { Component } from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import About from "./components/About";
import Header from "./components/Header";
import Sidebar from "./containers/Sidebar";
import ProjectContainer from "./containers/ProjectContainer";
import Login from "./components/Login";
import Signup from "./components/Signup";
import ListContainer from "./containers/ListContainer";

class App extends Component {
  state = {
    login: false
  };

  componentDidMount() {
    // Check local storage for a token
    this.checkForToken();
  }

  checkForToken = () => {
    localStorage.token
      ? this.getUserFromToken()
      : console.log("You're not logged in, buddy!!");
  };

  // Get user from token
  getUserFromToken = () => {
    fetch("http://localhost:3000/persist", {
      method: "GET",
      headers: {
        Authorization: localStorage.token,
        "Content-Type": "application/json",
        Accept: "application/json"
      }
    })
      .then(res => res.json())
      .then(userInfo => {
        this.setState(
          {
            login: true,
            currentUser: userInfo
          },
          () => {
            console.log(this.state.currentUser);
          }
        );
      });
  };

  logInUser = (username, password) => {
    fetch("http://localhost:3000/tokens", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      },
      body: JSON.stringify({ username, password })
    })
      .then(res => res.json())
      .then(userInfo => {
        this.setState(
          {
            login: true,
            currentUser: userInfo
          },
          () => {
            // store token in local storage
            localStorage.setItem("token", userInfo.token);
          }
        );
      });
  };

  render() {
    return this.state.login ? (
      <Router>
        <Header login={this.state.login} currentUser={this.state.currentUser} />
        <Switch>
          <Route exact path='/about' component={About} />
          <Route exact path='/project' component={ListContainer} />
          <Route
            exact
            path='/'
            render={routerProps => (
              <div className='home-container'>
                <Sidebar />
                <ProjectContainer currentUser={this.state.currentUser} />
              </div>
            )}
          />
        </Switch>
      </Router>
    ) : (
      <Router>
        <Header login={this.state.login} />
        <Switch>
          <Route
            exact
            path='/login'
            render={routerProps => (
              <Login {...routerProps} logInUser={this.logInUser} />
            )}
          />
          <Route exact path='/signup' component={Signup} />
          <Route
            path='/*'
            render={routerProps => (
              <Login {...routerProps} logInUser={this.logInUser} />
            )}
          />
        </Switch>
      </Router>
    );
  }
}

export default App;
