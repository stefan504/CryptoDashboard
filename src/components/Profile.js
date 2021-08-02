import React from 'react';

function Profile({ currentUser, favourites }) {
	if (
		currentUser === [] ||
		currentUser === null ||
		currentUser.additionalUserInfo === undefined
	) {
		return <h2 className="text-center">No active user</h2>;
	} else {
		return (
			<div>
				<h2 className="text-center">
					Welcome, {currentUser.additionalUserInfo.profile.given_name}
				</h2>

				<div className=" auto-cols-max grid grid-cols-3 place-items-center">
					{favourites.map((coin) => {
						return (
							<div
								className="shadow-md hover-col coin-container flex cursor-pointer rounded-md p-5 m-2 bg-primary  flex-col justify-between   text-center"
								key={coin.id}
							>
								<div>
									<h2>{coin.name}</h2>
								</div>
								<div>
									<img src={coin.image} alt="" />
								</div>
								<h5>${coin.current_price.toFixed(2)}</h5>
								{coin.market_cap_change_percentage_24h < 0 ? (
									<p className="text-red-500">
										{coin.market_cap_change_percentage_24h.toFixed(2)}%
									</p>
								) : (
									<p className="text-green-500">
										{coin.market_cap_change_percentage_24h.toFixed(2)}%
									</p>
								)}
							</div>
						);
					})}
				</div>
			</div>
		);
	}
}

export default Profile;
