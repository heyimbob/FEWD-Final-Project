import React, { Component } from 'react';
import logo from './CrossFitTurbineLogo.svg';
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
        
        <nav>
        <div className="nav-wrapper white">
          {/* <img src="./images/logo.png" a href="http://www.crossfitturbine.com/" className="turbine-logo right" alt="Crossfit Turbine Logo" /></a> */}
            <a href="#" data-activates="mobile-demo" className="button-collapse"><i className="material-icons icon-blue">menu</i></a>
            <ul className="left blue-text text-darken-1 hide-on-med-and-down">
                <li><a className="blue-text text-darken-1" href="./index.html">Home</a></li>
                <li><a className="blue-text text-darken-1" href="./quiz.html">Get Started</a></li>
                <li><a className="blue-text text-darken-1" href="">Schedule</a></li>
                <li><a className="blue-text text-darken-1" href="">Class Types</a></li>
              </ul>
  
              <ul className="side-nav" id="mobile-demo">
                 <li><a className="blue-text text-darken-1" href="./index.html">Home</a></li>
                <li><a className="blue-text text-darken-1" href="./quiz.html">Get Started</a></li>
                <li><a className="blue-text text-darken-1" href="">Schedule</a></li>
                <li><a className="blue-text text-darken-1" href="">Class Types</a></li>
              </ul>
        </div>
      </nav>

        {trainer}
        <p className="App-intro">
          <Quiz onChange={console.log}/>
        </p>
      </div>
    );
  }
}

export default App;
