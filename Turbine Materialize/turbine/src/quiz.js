import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';


class Quiz extends Component {
  constructor(props) {
    super(props)
    this.props.onChange ("bob")
    this.state = {
      fname: "",
      lname: "",
      qOne: "",
      qTwo: "",
      qthree: "",
      qFour: "",
      qFive: "",
    }

    this.handlefirstname = this.handlefirstname.bind(this);
    this.handlelastname = this.handlelastname.bind(this);
    this.handlequestionone = this.handlequestionone.bind(this);
    this.handlequestiontwo = this.handlequestiontwo.bind(this);
    this.handlequestionthree = this.handlequestionthree.bind(this);
    this.handlequestionfour = this.handlequestionfour.bind(this);
    this.handlequestionfive = this.handlequestionfive.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handlefirstname(event) {
    this.setState({...this.state, fname: event.target.value})
  }

  handlelastname(event) {
    this.setState({...this.state, lname: event.target.value})
  }

  handlequestionone(event) {
    this.setState({...this.state, qOne: event.target.value})
  }

  handlequestiontwo(event) {
    this.setState({...this.state, qTwo: event.target.value})
  }

  handlequestionthree(event) {
    this.setState({...this.state, qthree: event.target.value})
  }

  handlequestionfour(event) {
    this.setState({...this.state, qFour: event.target.value})
  }

  handlequestionfive(event) {
    this.setState({...this.state, qFive: event.target.value})
  }

  handleSubmit(event) {
    this.props.onChange (this.state);
    event.preventDefault();
  }

  render() {
    return (
      <section classname="container questions">
      <div classname="row topQuestion">
        <form classname="col s12">
          <div classname="row">
            <div classname="input-field col s12 m6">
              <input placeholder="First Name" id="first_name" type="text" classname="validate" value={this.state.fname} onChange={this.handlefirstname} />
              <label for="first_name">First Name</label>
            </div>
            <div classname="input-field col s12 m6">
              <input placeholder="Last Name" id="last_name" type="text" classname="validate" value={this.state.lname} onChange={this.handlelastname} />
              <label for="last_name">Last Name</label>
            </div>
          </div>
        </form>
      </div>

    <div classname="row">
      <form classname="col s12">
        <div classname="row">
          <div classname="input-field col s12" id="first_question">
            <p>What is your current fitness level?</p>
            <select name="question1" id="question1" value = {this.state.qOne} onChange={this.handlequestionone}>
              <option value="" disabled selected>Choose your option</option>
              <option id="oneA" value="1">I'm pretty new at everything</option>
              <option id="oneB" value="0">I know basic lifts, but could use a refresher</option>
              <option id="oneC" value="2">I'm a current athlete</option>
            </select>
            </div>
          </div>
        </form>
      </div>

      <div classname="row">
      <form classname="col s12">
        <div classname="row">
          <div classname="input-field col s12">
            <p>What are your health goals?</p>
            <select value = {this.state.qTwo} onChange={this.handlequestiontwo}>
              <option value="" disabled selected>Choose your option</option>
              <option value="0">Overall Fitness</option>
              <option value="0">Weight Loss</option>
              <option value="0">Get swole</option>
              <option value="1">I'm headed to the Crossfit Games</option>
            </select>
            </div>
          </div>
        </form>
      </div>

      <div classname="row">
      <form classname="col s12">
        <div classname="row">
          <div classname="input-field col s12">
            <p>Which program are you interested in?</p>
            <select value = {this.state.qthree} onChange={this.handlequestionthree}>
              <option value="" disabled selected>Choose your option</option>
              <option value="0">Gynamstics</option>
              <option value="0">Olympic Lifting</option>
              <option value="1">Barbell Betties</option>
              <option value="0">Strongman</option>
            </select>
            </div>
          </div>
        </form>
      </div>

      <div classname="row">
      <form classname="col s12">
        <div classname="row">
          <div classname="input-field col s12">
            <p>When do you usually workout?</p>
            <select value = {this.state.qFour} onChange={this.handlequestionfour}>
              <option value="" disabled selected>Choose your option</option>
              <option value="0">Morning</option>
              <option value="0">Afternoon</option>
              <option value="0">Evening</option>
            </select>
            </div>
          </div>
        </form>
      </div>


      <div classname="row">
      <form classname="col s12">
        <div classname="row">
          <div classname="input-field col s12">
            <p>For your first classname, you'd like to be trained by...</p>
            <select value = {this.state.qFive} onChange={this.handlequestionfive}>
              <option value="" disabled selected>Choose your option</option>
              <option value="0">Male Trainer</option>
              <option value="1">Female Trainer</option>
              <option value="0">No Preference</option>
            </select>
            </div>
            <div className="col s12">
              <a className="waves-effect waves-light btn questionButton" id="questionSubmit">Submit!</a>
            </div>
          </div>
        </form>
      </div>

      <form onSubmit={this.handleSubmit}>
        <input type="submit" value="Submit" />
      </form>
</section>
    );
  }
}

export default Quiz;
