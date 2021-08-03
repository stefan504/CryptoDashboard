import React, { useState } from 'react';
import Charts from './Charts';
import axios from 'axios';
function Profile({ currentUser, favourites }) {
	const [data, setData] = useState();

	const fetchChart = (coins) => {
		axios
			.get(
				`https://api.coingecko.com/api/v3/coins/${coins}/market_chart?vs_currency=usd&days=7&interval=daily`
			)
			.then((res) => {
				setData({
					labels: [
						'Monday',
						'Tuesday',
						'Wednesday',
						'Thursday',
						'Friday',
						'Saturday',
						'Sunday',
					],
					datasets: [
						{
							data: res.data.prices,
							label: coins,
							fill: false,
							lineTension: 0.5,
							backgroundColor: 'green',
							tickColor: 'green',
							borderColor: 'rgba(255,255,255,1)',
							borderWidth: 2,
							gridLines: {
								display: false,
								color: '#FFFFFF',
							},
						},
					],
				});
			});
	};

	if (
		currentUser === [] ||
		currentUser === null ||
		currentUser.additionalUserInfo === undefined
	) {
		return <h2 className="text-center">No active user</h2>;
	} else {
		return (
			<div className="grid grid-template">
				{/* <h2 className="text-center">
						Welcome, {currentUser.additionalUserInfo.profile.given_name}
					</h2> */}
				<div className="icons border-r-2 border-gray-500 px-2  grid grid-cols-2 content-start  ">
					{favourites.map((coin) => {
						return (
							<div
								onClick={() => fetchChart(coin.id)}
								className="border-r-2 border-purple-50 shadow-md hover-col coin-container flex cursor-pointer rounded-md p-5 m-2 bg-primary  flex-col justify-between   text-center"
								key={coin.id}
							>
								<div>
									<h2>{coin.name}</h2>
								</div>
								<div>
									<img src={coin.image} alt="" />
								</div>
								<h5>${coin.current_price.toFixed(2)}</h5>
							</div>
						);
					})}
				</div>
				<Charts data={data} favourites={favourites} />
			</div>
		);
	}
}

export default Profile;

// labels: ['January', 'February', 'March', 'April', 'May'],
// 		datasets: [
// 			{
// 				label: 'Rainfall',
// 				fill: false,
// 				lineTension: 0.5,
// 				backgroundColor: 'rgba(75,192,192,1)',
// 				borderColor: 'rgba(0,0,0,1)',
// 				borderWidth: 2,
// 				data: [65, 59, 80, 81, 56],
// 			},
// 		],
