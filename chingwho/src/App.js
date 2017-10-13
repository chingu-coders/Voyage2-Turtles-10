import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

//import components here:
import Sidebar from './components/sidebar';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Sidebar />
      </div>
    );
  }
}

export default App;
