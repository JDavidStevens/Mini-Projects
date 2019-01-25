import React, { Component } from 'react';
import {HashRouter} from 'react-router-dom';
import routes from './routes';
import './App.css';
import Banner from './components/banner/banner';
import Classes from './components/classes/classes';

class App extends Component {
  render() {
    return (
      <HashRouter>
      <div className="App">
      {routes}
      {/* <Banner/>
      <h1>Upcoming Classes</h1>
      <Classes/>         */}
      </div>
      </HashRouter>
    );
  }
}

export default App;
