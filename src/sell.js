import React from 'react';
import './sell.css';

const Sell = () => {
	return(
		<div className = "sellWrapper">
		<h3 className = "sellHead">Please enter information about the property you're looking to sell!</h3>
		<form>
			Address: <br />
			<input className = "sellInput" type="text" name="address" />
			<br />
			Size in Square Metres: <br />
			<input className = "sellInput" type="number" name="sqm" />
			<br />
			Number of bathrooms: <br />
			<input className = "sellInput" type="number" name="bath" />
			<br />
			Number of bedrooms: <br />
			<input className = "sellInput" type="number" name="bed" />
			</form>
	

		</div>



)

}


export default Sell;
