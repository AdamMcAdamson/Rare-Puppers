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
	const [cards, setCards] = useState([{"card_id":"1","card_owner_id":"1","dog_id":"1","card_name":"Pablo the Poblano","card_image":"https://www.protectorfiresafety.com/12748-thickbox_default/work-in-progress-.jpg","tier":12,"attributes":["derp","if it fits i sits","blep"],"upvotes":"0","downvotes":"0","dog_owner_id":"1","dog_name":"Pablo","dog_type":"pupper"},{"card_id":"2","card_owner_id":"1","dog_id":"1","card_name":"Pablo the Pirate","card_image":"https://www.protectorfiresafety.com/12748-thickbox_default/work-in-progress-.jpg","tier":19,"attributes":["derp","sit","bamboozled"],"upvotes":"0","downvotes":"0","dog_owner_id":"1","dog_name":"Pablo","dog_type":"pupper"},{"card_id":"3","card_owner_id":"1","dog_id":"6","card_name":"Chico the Wizard","card_image":"https://www.protectorfiresafety.com/12748-thickbox_default/work-in-progress-.jpg","tier":99,"attributes":["derp","sit","blep"],"upvotes":"0","downvotes":"0","dog_owner_id":"2","dog_name":"Chico","dog_type":"pupper"},{"card_id":"4","card_owner_id":"2","dog_id":"2","card_name":"Coco the Quick","card_image":"https://www.protectorfiresafety.com/12748-thickbox_default/work-in-progress-.jpg","tier":17,"attributes":["contains zoomies","very fast doggo running at incredible high speed"],"upvotes":"0","downvotes":"0","dog_owner_id":"2","dog_name":"Coco","dog_type":"pupper"},{"card_id":"5","card_owner_id":"3","dog_id":"3","card_name":"Lady the Derp","card_image":"https://www.protectorfiresafety.com/12748-thickbox_default/work-in-progress-.jpg","tier":14,"attributes":["derp","if it fits i sits","MOWF"],"upvotes":"0","downvotes":"0","dog_owner_id":"3","dog_name":"Lady","dog_type":"doggo"},{"card_id":"6","card_owner_id":"1","dog_id":"5","card_name":"Headwarmer","card_image":"https://www.protectorfiresafety.com/12748-thickbox_default/work-in-progress-.jpg","tier":22,"attributes":["sit","if it fits i sits","sploot"],"upvotes":"0","downvotes":"0","dog_owner_id":"1","dog_name":"Akamaru","dog_type":"yapper"},{"card_id":"7","card_owner_id":"1","dog_id":"4","card_name":"Lumbering jack","card_image":"https://www.protectorfiresafety.com/12748-thickbox_default/work-in-progress-.jpg","tier":13,"attributes":["shoob","protec","maximum borkdrive"],"upvotes":"0","downvotes":"0","dog_owner_id":"4","dog_name":"Rufus","dog_type":"floofer"},{"card_id":"8","card_owner_id":"1","dog_id":"3","card_name":"Big'Ol Chomper","card_image":"https://scontent-hou1-1.xx.fbcdn.net/v/t1.6435-9/241573388_1935043546662972_8555877076542978909_n.jpg?_nc_cat=110&ccb=1-5&_nc_sid=8bfeb9&_nc_ohc=v4evGEGdUuIAX8Ykc7m&_nc_ht=scontent-hou1-1.xx&oh=de9e26ff00aa9fbd6f0b8d162f80351d&oe=61999D92","tier":13,"attributes":["if it fits I sits","precious","googly eyes"],"upvotes":"0","downvotes":"0","dog_owner_id":"3","dog_name":"Lady","dog_type":"doggo"}]);
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
					{cards.map(card => <Card onClick={()=>dispatch({type: "clicked", id: card.card_id})} zoom={(id) => setZoomed(id)} card_id={card.card_id} card_name={card.card_name} card_owner={card.card_owner_id} dog_id={card.dog_id} dog_name={card.dog_name} dog_type={card.dog_type} card_image={card.card_image} tier={card.tier} attributes={card.attributes} upvotes={card.upvotes} downvotes={card.downvotes} />)}
				</div>
			</div>
		</div>
	);
}


export default CardsAll;
