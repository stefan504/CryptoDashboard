import React from 'react';
import '../App.css';
import { Link } from 'react-router-dom';
import logo from '../logo.png';
function Navbar({ loggedIn, handleLogOut, currentUser, handleLogIn }) {
	return (
		<div className="flex items-center justify-between  p-5">
			<div className=" items-center">
				<Link to="/">
					{' '}
					<img className="w-25 h-16" src={logo} alt="logo" />
				</Link>
			</div>

			<ul className="flex items-center  ">
				<Link to="/dashboard">
					{' '}
					<li className="ml-4">Dashboard</li>
				</Link>

				{loggedIn ? (
					<>
						<div className="p-2">
							<div className="dropdown inline-block relative">
								<button className="bg-gray-300 text-gray-700 font-semibold py-1 px-2 rounded inline-flex items-center">
									<span className="mr-1">
										Menu <i className="fas fa-caret-square-down"></i>
									</span>
								</button>
								<ul className="dropdown-menu absolute hidden text-gray-700 pt-1">
									<Link
										className="rounded-t bg-gray-200 hover:bg-gray-400 py-2 px-4 block whitespace-no-wrap"
										to="/profile"
									>
										<li className="ml-4 w-11 ">
											{' '}
											<img
												className="rounded-xl rounded-full"
												src={
													currentUser &&
													currentUser.additionalUserInfo.profile.picture
												}
												alt=""
											/>{' '}
											My profile
										</li>{' '}
									</Link>

									<Link
										className="rounded-t bg-gray-200 hover:bg-gray-400 py-2 px-4 block whitespace-no-wrap"
										to="/"
									>
										{' '}
										<li onClick={handleLogOut} className="ml-4">
											Log out
										</li>
									</Link>
								</ul>
							</div>
						</div>
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
