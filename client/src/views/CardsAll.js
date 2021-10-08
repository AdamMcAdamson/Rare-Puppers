import React, { Component } from 'react';
import Card from '../components/Card';
import '../App.css';

import { connect } from 'react-redux'
import { getCardsAll } from '../redux/selectors'


function CardsAll () {

	console.log("Hello: " + this.state.cards);
	console.log("Heyyooo: " + this.props.cards);

	return (
		<div className="Cards_All">
			<div id="cards">
				<div class="container">
					<p> JOHN CENA </p>
					{console.log(this.state.cards)}
					{this.cards.map(card => <Card name="Pablo the Pablano" tier={card.tier} dogtype={card.dogtype} upvotes={card.upvotes} downvotes={card.downvotes} attributes={card.attributes}/>)}
				</div>
			</div>
		</div>
	);
}


export default CardsAll;
