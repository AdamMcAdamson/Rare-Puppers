import React, { Component } from 'react';
import Card from '../components/Card';
import '../App.css';
import { useLocation } from 'react-router';


function Cards_All () {

	const location = useLocation();
	const cards = location.state.cards;
	console.log("Hello: " + location.state);

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


export default Cards_All;
