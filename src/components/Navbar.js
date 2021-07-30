import React from 'react';
import '../App.css';
import { Link } from 'react-router-dom';
function Navbar() {
	return (
		<div className="flex justify-between mx-2 p-5">
			<div>CryptoPro</div>
			<div className="flex ">
				<ul className="flex">
					<Link to="/homepage">
						{' '}
						<li className="ml-4">Homepage</li>
					</Link>
					<Link to="/dashboard">
						{' '}
						<li className="ml-4">Dashboard</li>
					</Link>
					<Link to="/favourites">
						{' '}
						<li className="ml-4">Favourites</li>
					</Link>
					<a href="">
						{' '}
						<li className="ml-4">Log In</li>
					</a>
				</ul>
			</div>
		</div>
	);
}

export default Navbar;
