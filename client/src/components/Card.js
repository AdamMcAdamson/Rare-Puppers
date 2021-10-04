import React, { Component } from 'react';

class Card extends Component {
	constructor(props){
	  super(props);
	}

	render() {
    
		return (
		  <div className="Card">
			<img class="card-image" src="https://www.protectorfiresafety.com/12748-thickbox_default/work-in-progress-.jpg" alt="cute dog"/>
			<a class="card-name">{this.props.name}</a>
			<a class="card-tier">{this.props.tier}</a>
			<div class="card-stats">
				<div class="card-ratings">Upvotes: {this.props.upvotes}  Downvotes: {this.props.downvotes}</div>
				<div class="card-type">{this.props.dogtype}</div>
				<div class="card-attributes">{this.props.attributes}</div>
			</div>
		  </div>
		);
	  }
}

export default Card;