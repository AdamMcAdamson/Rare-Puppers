import React, { Component } from 'react';
import {
  HashRouter as Router,
  Switch,
  Route,
  Link,
} from 'react-router-dom'
//import Card from './components/Card';
import Cards_All from './views/cards_all'
import Dummy from './views/dummy';
import './App.css';
import Card from './components/Card';


class App extends Component {
  constructor(props){
    super(props);
    this.state = {out: 'hello'};
    this.cards = [];
  }
  componentDidMount() {
    this.getCards();
  }

  getCards = () => {
    fetch('/api/cards/all')
      .then(res => res.json())
      .then(res => this.setState( this.cards = res ));
  }

  render() {
    
    return (
      <Router>
        <div className="App">
          <ul className="header">
            <li><NavLink to="/">Dummy</NavLink></li>
            <li><NavLink to="/cards/alll">View Cards</NavLink></li>
          </ul>
          <Switch>
            <Route path="/">
              <Dummy />
            </Route>
            <Route path="/cards/all">
              <Cards_All />
            </Route>
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
