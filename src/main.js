import React from 'react';
import "./main.css";

const Main = () => {
	return(
		<div className = "mainContainer">
		<img className = "hero" src={require('./hero.jpg')}/>
		<div className = "herotext">
		<h1>Find Your Dream Home</h1>
		<p>Appartements, Houses, Mansions</p>
		</div>
		<p className = "looking">What are you looking for?</p>
		</div>
		
		

		);
};

export default Main;