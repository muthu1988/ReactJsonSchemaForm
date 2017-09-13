import React, { Component } from 'react';
import FormOne from './form1.js';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap-theme.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <FormOne />
      </div>
    );
  }
}

export default App;
