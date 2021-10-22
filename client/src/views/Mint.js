import React, { useState } from 'react';
import Card from '../components/Card';
import '../App.css';

const initialFormData = Object.freeze({
	owner_id: "",
	dog_id: "",
	dog_owner_id:"",
	card_name: "",
	tier: "",
	attributes: []
})

function Mint (props) {
	const [formData, updateFormData] = useState(initialFormData);

	const handleChange = (e) => {
		updateFormData({
			...formData,
	
			[e.target.name]: e.target.value.trim(),
		});
	  };	

	const handleSubmit = (e) =>{
		e.preventDefault();
		console.log("HANDLE SUBMIT");
		console.log(formData)
		fetch('/mint', {
			method: 'POST',
			headers: {
				'Accept': 'application/json',
				'Content-Type': 'application/json',
			},
			body: formData
		})
	}

	return (
		<div className="Mint">
			<div id="mint-container">
				<h2>Card Mint Form:</h2>
				<form id="mint-form" onSubmit={e => {handleSubmit(e)}}>
					<label class="mint-form-label">Your ID</label>
					<input class="mint-form-input" name="owner_id" type='number' onChange={handleChange}/>
					<br/>
					<label class="mint-form-label">Dog ID</label>
					<input class="mint-form-input" name="dog_id" type='number' onChange={handleChange}/>
					<br/>
					<label class="mint-form-label">Dog Owner ID</label>
					<input class="mint-form-input" name="dog_owner_id" type='number' onChange={handleChange}/>
					<br/>
					<label class="mint-form-label">Card name</label>
					<input class="mint-form-input" name="card_name" type='text' onChange={handleChange}/>
					<br/>
					<label class="mint-form-label">Tier</label>
					<input class="mint-form-input" name="tier" type='number' onChange={handleChange}/>
					<br/>
					{/*@TODO: Use Chip components for attributes array form input*/}
					<label class="mint-form-label">Attributes</label>
					<input class="mint-form-input" name="attributes" type='text' onChange={handleChange}/>
					<input class="mint-form-submit" name="submit" type="submit"/>
				</form>
			</div>
		</div>
	);
}


export default Mint;
