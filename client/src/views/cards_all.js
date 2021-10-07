import React, { Component } from 'react';
import Card from '../components/Card';
import '../App.css';


class Cards_All extends Component {
  constructor(props){
    super(props);
    //this.cards = [];
  }

  /*
  componentDidMount() {
    this.getCards();
  }

  getCards = () => {
    fetch('/api/cards/all')
      .then(res => res.json())
      .then(res => this.setState( this.cards = res ));
  }
*/
  render() {
	  return (
		<div className="Cards_All">
		  <div id="cards">
			<div class="container">
			  <p> JOHN CENA </p>
			  {console.log(this.cards)}
			  {this.cards.map(card => <Card name="Pablo the Pablano" tier={card.tier} dogtype={card.dogtype} upvotes={card.upvotes} downvotes={card.downvotes} attributes={card.attributes}/>)}
			</div>
		  </div>
		</div>
	  );
  }
}

export default Cards_All;
