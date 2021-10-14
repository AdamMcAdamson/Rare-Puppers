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
	const [cards, setCards] = useState([{_id: '1',owner_id: '1',tier: 10,dogtype: 'pupper',attributes: [ 'supreme cuddler', 'lick monster', 'hand shaker' ],upvotes: '0',downvotes: '0'},{_id: '2',owner_id: '1',tier: 8,dogtype: 'woofer',attributes: [ 'big boy lap-dog', 'hand shaker', 'contains zoomies' ],upvotes: '142',downvotes: '3'},{_id: '3',owner_id: '1',tier: 8,dogtype: 'doggo',attributes: ['toy destroyer', 'contains zoomies', 'cat ally', 'squirrel ally'],upvotes: '142',downvotes: '3'},{_id: '4',owner_id: '1',tier: 13,dogtype: 'pupper',attributes: [ 'butt scooter', 'contains zoomies', 'lick monster' ],upvotes: '327',downvotes: '5'},{_id: '5',owner_id: '2',tier: 9,dogtype: 'pupper',attributes: [ 'contains zoomies', 'handshaker', 'trick master' ],upvotes: '10',downvotes: '1'},{_id: '6',owner_id: '2',tier: 7,dogtype: 'doggo',attributes: [ 'handshaker', 'cat ally', 'lick monster' ],upvotes: '13',downvotes: '2'},{_id: '9',owner_id: '3',tier: 4,dogtype: 'woofer',attributes: [ 'big boy lap-dog', 'cat ally', 'lick monster' ],upvotes: '6',downvotes: '3'}]);
	const search = useLocation().search;
	const sort = new URLSearchParams(search).get("sort");

	useEffect(
		() => {
			fetch('/cards/all')
      		.then(res => res.json())
    		.then(res => setCards(res)).then(cards.sort((el1, el2) => {
				console.log("SORT: " + sort);
				if(sort === "_id" || sort === "") {
					return (Number(el1[sort]) <= Number(el2[sort])) ? -1 : 1;
				}
				else {
					return (Number(el1[sort]) <= Number(el2[sort])) ? 1 : -1;
				}
			}))
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
					{cards.map(card => <Card onClick={()=>dispatch({type: "clicked", id: card._id})} zoom={(id) => setZoomed(id)} card_id={card._id} name={card._id + " - Pablo the Pablano"} tier={card.tier} dogtype={card.dogtype} upvotes={card.upvotes} downvotes={card.downvotes} attributes={card.attributes}/>)}
				</div>
			</div>
		</div>
	);
}


export default CardsAll;
