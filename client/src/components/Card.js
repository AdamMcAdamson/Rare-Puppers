import React from 'react';

function Card (props) {
	const [zoom, setZoom] = React.useState(-1);
	return (
		<div class="card-containter">
		<div className="Card" onClick={props.onClick} id={props.card_id} class={"Card " + props.zoom(props.card_id)}>
		<img class="card-image" src="https://www.protectorfiresafety.com/12748-thickbox_default/work-in-progress-.jpg" alt="cute dog"/>
		<a class="card-name">{props.name}</a>
		<a class="card-tier">{props.tier}</a>
		<div class="card-stats">
			<div class="card-ratings">Upvotes: {props.upvotes}  Downvotes: {props.downvotes}</div>
			<div class="card-attributes">{props.attributes}</div>
		</div>
		</div>
		</div>
	);
}

export default Card;