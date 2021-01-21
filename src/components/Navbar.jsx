import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
import logo from '../assets/img/logo.png';

function Navbar() {
	return (
		<nav className="navbar">
			<div className="navbar__logo">
				<Link to="/">
					<img src={logo} alt="" />
				</Link>
			</div>
			<ul className="navbar__menu">
				<li>
					<Link to="/">Home</Link>
				</li>
				<li>
					<Link to="/about">About</Link>
				</li>
			</ul>
			<Link to="/cart" className="navbar__cart">
				Carrito
			</Link>
		</nav>
	);
}

export default Navbar;
