import React, { Component } from 'react';
// import logo from './logo.svg';
// import './App.css';

//import components here:
import Sidebar from './containers/sidebar';
import SingleProfile from './components/single_profile_view';


class App extends Component {
  render() {
    return (
      // <div className="App">

      // </div>
      <SingleProfile />
    );
  }
}

export default App;
