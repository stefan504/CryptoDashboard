import React from 'react';
import '../App.css';
import axios from 'axios';
function Dashboard({ coins, addToFavs }) {
	const getCoinData = (curr) => {
		axios
			.get(
				`https://api.coingecko.com/api/v3/coins/${curr.id}/market_chart?vs_currency=usd&days=10&interval=daily`
			)
			.then((res) => {
				console.log(res);
			});
	};

	return (
		<div className="grid grid-cols-5 mx-12">
			{coins.map((coin) => {
				return (
					<div
						onClick={() => getCoinData(coin)}
						className="shadow-md hover-col coin-container flex cursor-pointer rounded-md p-5 m-2 bg-primary  flex-col justify-between   text-center"
						key={coin.id}
					>
						<button onClick={() => addToFavs(coin)}>favourites</button>
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
	);
}

export default Dashboard;
