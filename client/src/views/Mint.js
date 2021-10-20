import React from 'react';
import Card from '../components/Card';
import '../App.css';


function Mint (props) {
	const handleSubmit = (e) =>{
		fetch('/mint', {
			method: 'POST',
			headers: {
				'Accept': 'application/json',
				'Content-Type': 'application/json',
			},
			body: JSON.stringify({
				owner_id: e.target.owner_id,
				dog_id: e.target.dog_id,
				dog_owner_id: e.target.dog_owner_id,
				card_name: e.target.card_name,
				tier: e.target.tier,
				attributes: e.tartet.attributes.split(",").map(a => a.trim())
			})
		})
	}

	return (
		<div className="Mint">
			<div id="mint-container">
				<h2>Card Mint Form:</h2>
				<form id="mint-form" onSubmit={e => {handleSubmit(e)}}>
					<label class="mint-form-label">Your ID</label>
					<input class="mint-form-input" name="owner_id" type='number'/>
					<br/>
					<label class="mint-form-label">Dog ID</label>
					<input class="mint-form-input" name="dog_id" type='number'/>
					<br/>
					<label class="mint-form-label">Dog Owner ID</label>
					<input class="mint-form-input" name="dog_owner_id" type='number'/>
					<br/>
					<label class="mint-form-label">Card name</label>
					<input class="mint-form-input" name="card_name" type='text'/>
					<br/>
					<label class="mint-form-label">Tier</label>
					<input class="mint-form-input" name="tier" type='number'/>
					<br/>
					{/*@TODO: Use Chip components for attributes array form input*/}
					<label class="mint-form-label">Attributes</label>
					<input class="mint-form-input" name="attributes" type='text'/>
					<input class="mint-form-submit" name="submit" type="submit"/>
				</form>
			</div>
		</div>
	);
}


export default Mint;
