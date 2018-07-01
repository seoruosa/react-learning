import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Game from './tictactoe.js'

const name = 'Josh Perez';
const element = <h1>Hello, {name}</h1>;

class Clock extends Component {
  constructor(props) {
    super(props);
    this.state = {date: new Date()};
  }

  tick(){
    this.setState({
      date: new Date(),
    });
  }

  componentDidMount() {
    this.timerID = setInterval(
      () => this.tick(),
      1000
    );
  }

  componentWillUnmount() {
    clearInterval(this.timerID);
  }

  render () {
    return(
      <h2>{this.state.date.toLocaleTimeString()}</h2>
    );
  }
}

class Toggle extends React.Component {
  constructor(props) {
    super(props);
    this.state = {isToggleOn: true};

    // This binding is necessary to make `this` work in the callback
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState(prevState => ({
      isToggleOn: !prevState.isToggleOn
    }));
  }

  render() {
    return (
      <button onClick={this.handleClick}>
        {this.state.isToggleOn ? 'ON' : 'OFF'}
      </button>
    );
  }
}

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        {element}
        <Clock />
        <Game />
        <Toggle />
      </div>
    );
  }
}
export default App;
