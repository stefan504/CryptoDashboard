import React, { useState } from 'react';
import '../App.css';
import { Link } from 'react-router-dom';
function Navbar({ loggedIn, handleLogOut, currentUser, handleLogIn }) {
	return (
		<div className="flex items-center justify-between mx-2 p-5">
			<div>CryptoPro</div>

			<ul className="flex items-center  ">
				<Link to="/homepage">
					{' '}
					<li className="ml-4">Homepage</li>
				</Link>
				<Link to="/dashboard">
					{' '}
					<li className="ml-4">Dashboard</li>
				</Link>

				{loggedIn ? (
					<>
						<Link to="/">
							{' '}
							<li onClick={handleLogOut} className="ml-4">
								Log out
							</li>
						</Link>
						<Link to="/profile">
							{' '}
							<li className="ml-4 w-11 ">
								{' '}
								<img
									className="rounded-xl rounded-full"
									src={
										currentUser &&
										currentUser.additionalUserInfo.profile.picture
									}
									alt=""
								/>
							</li>{' '}
						</Link>
					</>
				) : (
					<Link onClick={handleLogIn} to="/">
						{' '}
						<li className="ml-4">Log In</li>
					</Link>
				)}
			</ul>
		</div>
	);
}

export default Navbar;
