import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import { CurrentTask } from './timetracker';
import './App.css';

class App extends Component {
  render() {
    return (
      <MuiThemeProvider>
        <CurrentTask />
      </MuiThemeProvider>
    );
  }
}

export default App;
