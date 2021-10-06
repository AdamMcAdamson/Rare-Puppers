import React, { Component } from 'react';
import Card from './components/Card';
import './App.css';


class App extends Component {
  constructor(props){
    super(props);
    this.state = {out: 'hello'};
    this.cards = [];
  }
  componentDidMount() {
    this.getBackend();
  }

  getBackend = () => {
    fetch('/cards/all')
      .then(res => res.json())
      .then(res => this.setState( this.cards = res ));
  }

  getCards = () => {
    let output= <p>Hello</p>;
    if(this.cards !== undefined){
      for (let card in this.cards){
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
            {console.log(this.cards)}
            {this.cards.map(card => <Card name="Pablo the Pablano" tier={card.tier} dogtype={card.dogtype} upvotes={card.upvotes} downvotes={card.downvotes} attributes={card.attributes}/>)}
          </div>
        </div>
      </div>
    );
  }
}

export default App;
