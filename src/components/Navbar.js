import React from 'react';
import '../App.css';
function Navbar() {
	return (
		<div className="flex justify-between">
			<div>CryptoPro</div>
			<div className="flex">
				<ul>
					<a href="">
						{' '}
						<li>Homepage</li>
					</a>
					<a href="">
						{' '}
						<li>Dashboard</li>
					</a>
					<a href="">
						{' '}
						<li>Favourites</li>
					</a>
					<a href="">
						{' '}
						<li>Log In</li>
					</a>
				</ul>
			</div>
		</div>
	);
}

export default Navbar;
