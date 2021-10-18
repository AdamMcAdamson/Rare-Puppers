import React, { useState, useEffect, useReducer } from 'react';
import {Link} from 'react-router-dom';
import Card from '../components/Card';
import '../App.css';
import { useLocation, useParams } from 'react-router';

function reducer(zoomState, action) {
	switch(action.type){
		case "clicked":
			return ((zoomState === 0) ? action.id : ((zoomState === action.id) ? 0 : zoomState)); 
	}
}

function CardsAll (props) {
	const [zoomState, dispatch] = useReducer(reducer, 0);
	const [reload, setReload] = useState(0);
	const [cards, setCards] = useState(0);
	const search = useLocation().search;
	const sort = new URLSearchParams(search).get("sort");

	useEffect(
		() => {
			fetch('/cards/all?sort=' + sort)
      		.then(res => res.json())
    		.then(res => setCards(res))
		},
		[reload, sort]
	);

	const setZoomed = (id) => {
		return (id == zoomState) ? "zoomed" : "";
	}

	return (
		<div className="Cards_All">
		<div class="sort-buttons">
			<Link to="/cards/all?sort=_id">ID</Link> 
			<span> </span>
			<Link to="/cards/all?sort=upvotes">Upvotes</Link>
			<span> </span>
			<Link to="/cards/all?sort=tier">Tier</Link>
		</div>
			<div id="cards">
				<div class="container">
					{cards.map(card => <Card onClick={()=>dispatch({type: "clicked", id: card._id})} zoom={(id) => setZoomed(id)} card_id={card._id} name={card.card_name} tier={card.tier + "/10"} attributes={card.attributes} upvotes={card.upvotes} downvotes={card.downvotes} />)}
				</div>
			</div>
		</div>
	);
}


export default CardsAll;
