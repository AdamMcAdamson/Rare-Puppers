import React, { Component } from 'react';
import Card from './components/Card';
import './App.css';


class App extends Component {
  constructor(props){
    super(props);
    this.state = {out: 'hello'};
  }

  componentDidMount() {
    this.getBackend();
  }

  getBackend = () => {
    fetch('/cards/all')
      .then(res => res.json())
      .then(res => this.setState( this.state.cards = res ));
  }

  getCards = () => {
    let output= <p>Hello</p>;
    if(this.state.cards !== undefined){
      for (let card in this.state.cards) {
        output += <Card name="Pablo the Pablano" tier={card.tier} dogtype={card.dogtype} upvotes={card.upvotes} downvotes={card.downvotes} attributes={card.attributes}/>;
      }
    }
    console.log(output);
    return output;
  }


  render() {
    
    return (
      <div className="App">
        <div id="cards">
          <div class="container">
            {this.getCards()}
          </div>
        </div>
      </div>
    );
  }
}

export default App;
