import React from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect, NavLink } from 'react-router-dom';
import "./header.css";
import './houses.css';
import Contact from './contact.js';
import Houses from './houses.js';
import Rent from './rent.js';
import Sell from './sell.js';
import About from './about.js';

const Header = () => {
	return(
		<div className="Headcontainer">
		<p className="Casa">La Casa</p>
		<Router>
		<ul>
  			<li><NavLink to="/contact" exact activeClassName="active">Contact</NavLink></li>
 			<li><NavLink to="/about" exact activeClassName="active">About</NavLink></li>
 			<li><NavLink to="/sell" exact activeClassName="active">Sell</NavLink></li>
 			<li><NavLink to="/rent" exact activeClassName="active">Rent</NavLink></li>
 			<li><NavLink to="/houses" exact activeClassName="active">Buy</NavLink></li>
		</ul>

		<main>
				<Switch>
					<Route path="/contact" exact component={Contact} />
					<Route path="/houses" exact component={Houses} />
					<Route path="/rent" exact component={Rent} />
					<Route path="/sell" exact component={Sell} />
					<Route path="/about" exact component={About} />
				</Switch>
			</main>

		</Router>
		<button>Login</button>
		</div>
		

		)
}

export default Header;