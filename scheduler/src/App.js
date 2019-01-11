import React, { Component } from 'react';
import './App.css';
import Banner from './components/banner/banner';
import Classes from './components/classes/classes';

class App extends Component {
  render() {
    return (
      <div className="App">
      <Banner/>
      <h1>Upcoming Classes</h1>
      <Classes/>        
      </div>
    );
  }
}

export default App;
