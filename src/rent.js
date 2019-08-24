import React from 'react';
import './rent.css';


const Rent = () => {
	return(
		<div className = "rentWrapper">
		<div className="House">
		<img className = "housePic" src={require('./rent1.png')}/>
		<h3>Seaside Appartement</h3>
		<p>2 Kitchen, 2 Bedrooms, 2 Bathrooms (130sqm)</p>
		</div>
		<div className="House">
		<img className = "housePic" src={require('./rent2.png')}/>
		<h3>Luxury Appartement</h3>
		<p>1 Kitchen, 2 Bedrooms, 1 Bathroom (120sqm)</p>
		</div>
		<div className="House">
		<img className = "housePic" src={require('./rent3.png')}/>
		<h3>The Seven Munich</h3>
		<p>1 Kitchen, 2 Bedrooms, 2 Bathroom (115sqm)</p>
		</div>
		<div className="House">
		<img className = "housePic" src={require('./rent4.png')}/>
		<h3>The Seven Munich</h3>
		<p>1 Kitchen, 2 Bedrooms, 2 Bathroom (115sqm)</p>
		</div>
		<div className="House">
		<img className = "housePic" src={require('./rent5.png')}/>
		<h3>The Seven Munich</h3>
		<p>1 Kitchen, 2 Bedrooms, 2 Bathroom (115sqm)</p>
		</div>
		<div className="House">
		<img className = "housePic" src={require('./rent6.png')}/>
		<h3>The Seven Munich</h3>
		<p>1 Kitchen, 2 Bedrooms, 2 Bathroom (115sqm)</p>
		</div>
		</div>

		);
};

export default Rent;