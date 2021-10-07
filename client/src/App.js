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
    fetch('/cards/all')
      .then(res => res.json())
      .then(res => this.setState( this.cards = res ));
  }

  render() {
    return (
      <Router>
        <div className="App">
          <ul className="header">
            <li><Link to="/">Dummy</Link></li>
            <li><Link to="/cards/all">View Cards</Link></li>
          </ul>
          <Switch>
            <Route path="/cards/all" component={Cards_All}/>
            <Route path="/" component={Dummy}/>
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
