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
	const [cards, setCards] = useState([{"_id":"1","owner_id":"1","dog_id":"1","card_name":"Pablo the Poblano","tier":12,"attributes":["derp","if it fits i sits","blep"],"upvotes":"0","downvotes":"0","dog_name":"Pablo","dog_type":"pupper"},{"_id":"1","owner_id":"1","dog_id":"1","card_name":"Pablo the Pirate","tier":19,"attributes":["derp","sit","bamboozled"],"upvotes":"0","downvotes":"0","dog_name":"Pablo","dog_type":"pupper"},{"_id":"6","owner_id":"2","dog_id":"6","card_name":"Chico the Wizard","tier":99,"attributes":["derp","sit","blep"],"upvotes":"0","downvotes":"0","dog_name":"Chico","dog_type":"pupper"},{"_id":"2","owner_id":"2","dog_id":"2","card_name":"Coco the Quick","tier":17,"attributes":["contains zoomies","very fast doggo running at incredible high speed"],"upvotes":"0","downvotes":"0","dog_name":"Coco","dog_type":"pupper"},{"_id":"3","owner_id":"3","dog_id":"3","card_name":"Lady the Derp","tier":14,"attributes":["derp","if it fits i sits","MOWF"],"upvotes":"0","downvotes":"0","dog_name":"Lady","dog_type":"doggo"},{"_id":"5","owner_id":"1","dog_id":"5","card_name":"Headwarmer","tier":22,"attributes":["sit","if it fits i sits","sploot"],"upvotes":"0","downvotes":"0","dog_name":"Akamaru","dog_type":"yapper"},{"_id":"4","owner_id":"4","dog_id":"4","card_name":"Lumbering jack","tier":13,"attributes":["shoob","protec","maximum borkdrive"],"upvotes":"0","downvotes":"0","dog_name":"Rufus","dog_type":"floofer"}]);
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
					{cards.map(card => <Card onClick={()=>dispatch({type: "clicked", id: card._id})} zoom={(id) => setZoomed(id)} card_id={card._id} card_name={card.card_name} owner={card.owner_id} dog_id={card.dog_id} dog_name={card.dog_name} dog_type={card.dog_type} tier={card.tier + "/10"} attributes={card.attributes} upvotes={card.upvotes} downvotes={card.downvotes} />)}
				</div>
			</div>
		</div>
	);
}


export default CardsAll;
