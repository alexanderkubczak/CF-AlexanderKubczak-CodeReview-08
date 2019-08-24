import React from 'react';
import './footer.css';

const Footer = () => {
	return(
		<div className = "footerWrap">
		<img className = "footerPic" src={require('./foot.png')}/>
		<p className = "footerText">Alexander Kubczak - CodeReview08 - 2019</p>
		</div>


		)
}

export default Footer;