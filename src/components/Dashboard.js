import React from 'react';
import '../App.css';
import axios from 'axios';
function Dashboard({ coins, addToFavs, open }) {
	const getCoinData = (curr) => {
		axios
			.get(
				`https://api.coingecko.com/api/v3/coins/${curr.id}/market_chart?vs_currency=usd&days=10&interval=daily`
			)
			.then((res) => {});
	};
	console.log(open);

	return (
		<div className=" pt-6 grid lg:grid-cols-4 xl:grid-cols-5  md:grid-cols-3 md:mx-12 sm:grid-cols-2 sm:mx-auto">
			{coins.map((coin) => {
				return (
					<div
						onClick={() => getCoinData(coin)}
						className=" shadow-md hover-col coin-container flex cursor-pointer rounded-md p-5 m-2 bg-primary  flex-col justify-between   text-center"
						key={coin.id}
					>
						<button
							onClick={() => addToFavs(coin)}
							className="bg-red-500 hover:bg-red-400 text-white font-bold py-2 px-4 border-b-4 border-red-700 hover:border-red-500 rounded mx-auto mb-1 w-1/2 w-min"
						>
							💜
						</button>
						<div>
							<h2>{coin.name}</h2>
						</div>
						<div className="mx-auto">
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
			{open ? (
				<div
					className="bg-green-100 border border-red-400 text-green-700 px-4 py-3 rounded fixed inset-x-0 bottom-0 w-max mx-auto"
					role="alert"
				>
					<strong className="font-bold">Added to favourites</strong>

					<span className="absolute top-0 bottom-0 right-0 px-4 py-3">
						<svg
							className="fill-current h-6 w-6 text-red-500"
							role="button"
							xmlns="http://www.w3.org/2000/svg"
							viewBox="0 0 20 20"
						></svg>
					</span>
				</div>
			) : (
				''
			)}
		</div>
	);
}

export default Dashboard;
