import React from 'react';
import './houses.css';




const Houses = () => {
	return(
		<div className="Housewrapper">
			<div className="House">
		<img className = "housePic" src={require('./seaside.png')}/>
		<h3>Seaside Appartement</h3>
		<p>2 Kitchen, 2 Bedrooms, 2 Bathrooms (130sqm)</p>
		</div>
		<div className="House">
		<img className = "housePic" src={require('./app1.png')}/>
		<h3>Luxury Appartement</h3>
		<p>1 Kitchen, 2 Bedrooms, 1 Bathroom (120sqm)</p>
		</div>
		<div className="House">
		<img className = "housePic" src={require('./app3.png')}/>
		<h3>The Seven Munich</h3>
		<p>1 Kitchen, 2 Bedrooms, 2 Bathroom (115sqm)</p>
		</div>
		<div className="House">
		<img className = "housePic" src={require('./app4.png')}/>
		<h3>Clouds Gate</h3>
		<p>1 Kitchen, 2 Bedrooms, 2 Bathroom (115sqm)</p>
		</div>
		<div className="House">
		<img className = "housePic" src={require('./app5.png')}/>
		<h3>Total Luxury</h3>
		<p>1 Kitchen, 2 Bedrooms, 2 Bathroom (115sqm)</p>
		</div>
		<div className="House">
		<img className = "housePic" src={require('./app6.png')}/>
		<h3>The Residence</h3>
		<p>1 Kitchen, 2 Bedrooms, 2 Bathroom (115sqm)</p>
		</div>
		<div className="House">
		<img className = "housePic" src={require('./app7.png')}/>
		<h3>Insert Appartement Name here :D</h3>
		<p>1 Kitchen, 2 Bedrooms, 2 Bathroom (115sqm)</p>
		</div>
		<div className="House">
		<img className = "housePic" src={require('./app8.png')}/>
		<h3>Harburgs Heaven</h3>
		<p>1 Kitchen, 2 Bedrooms, 2 Bathroom (115sqm)</p>
		</div>
		<div className="House">
		<img className = "housePic" src={require('./app9.png')}/>
		<h3>A really pretty Mansion</h3>
		<p>1 Kitchen, 2 Bedrooms, 2 Bathroom (115sqm)</p>
		</div>
		<button className = "listings">VIEW MORE LISTINGS</button>
		</div>


		)
	}


export default Houses;



