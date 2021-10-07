import React, { Component } from 'react';
import Card from '../components/Card';
import '../App.css';


class Cards_All extends Component {
  constructor(props){
    super(props);
  }

	render() {
	  return (
		<div className="Cards_All">
		  <div id="cards">
			<div class="container">
			  <p> JOHN CENA </p>
			  {console.log(this.state.cards)}
			  {this.state.cards.map(card => <Card name="Pablo the Pablano" tier={card.tier} dogtype={card.dogtype} upvotes={card.upvotes} downvotes={card.downvotes} attributes={card.attributes}/>)}
			</div>
		  </div>
		</div>
	  );
  	}
}

export default Cards_All;
