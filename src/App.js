import React, { Component } from 'react';
import logo from './logo.svg';
import Main from './Components/Main';
import './App.css';

class App extends Component {
  render() {
    return (
      <Main textData={50} />
    );
  }
}

export default App;
