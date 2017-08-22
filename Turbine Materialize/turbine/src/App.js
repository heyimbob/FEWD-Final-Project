import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Quiz from './quiz'; 
import Trainer from './Trainer'

class App extends Component {

 // this.state....

  render() {


  var trainer = <h1>trainer</h1>;

  if(4 > 3){
    trainer = <p>fgfdg</p>
  }
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        {trainer}
        <p className="App-intro">
          <Quiz onChange={console.log}/>
        </p>
      </div>
    );
  }
}

export default App;
