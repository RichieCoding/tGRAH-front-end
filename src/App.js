import React from 'react';
import './App.css';
import { Switch, Route } from 'react-router-dom'
import Header from './components/Header';
import About from './components/About'


function App() {
  return (
    <Switch className="App">
     <Route path="/about" component={About} />
     <Header />
    </Switch>
  );
}

export default App;

