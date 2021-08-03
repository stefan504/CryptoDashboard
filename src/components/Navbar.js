import React from 'react';
import '../App.css';
import { Link } from 'react-router-dom';
import logo from '../logo.png';
function Navbar({ loggedIn, handleLogOut, currentUser, handleLogIn }) {
	return (
		<div className="flex items-center justify-between  p-5">
			<div className="max-h-7">
				<Link to="/">
					{' '}
					<img className="max-h-16" src={logo} alt="logo" />
				</Link>
			</div>

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
					<Link onClick={handleLogIn} to="/dashboard">
						{' '}
						<li className="ml-4">Log In</li>
					</Link>
				)}
			</ul>
		</div>
	);
}

export default Navbar;
