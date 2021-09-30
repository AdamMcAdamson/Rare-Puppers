import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {

  state = { out: '' };

  componentDidMount() {
    this.getBackend();
  }

  getBackend = () => {
    fetch('/express_backend')
      .then(res => res.json())
      .then(out => this.setState({ out }));
  }

  render() {
    const { out } = this.state;
    
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
            {out}
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
    );
  }
}

export default App;
