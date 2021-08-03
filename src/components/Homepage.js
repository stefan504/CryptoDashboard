import React from 'react';
import img from '../landing.png';
import { Link } from 'react-router-dom';
function Homepage() {
	return (
		<div className="h-90 pt-6 flex justify-around content-center flex-column">
			<div className="lg:pt-52 px-3">
				<h2 className="text-5xl mb-2 text-white">Powerful crypto-tracker.</h2>
				<h3 className="text-2xl mb-2 text-yellow-400">
					Investments and blockchain solutions.
				</h3>
				<Link
					to="/dashboard"
					className="bg-purple-500 hover:bg-purple-400 text-white font-bold py-2 px-4 border-b-4 border-purple-700 hover:border-purple-500 rounded mx-auto mb-1 w-1/2 w-max"
				>
					Get started
				</Link>
			</div>
			<div className="w-5/12 width h-4/6 bg-cover  ">
				<img src={img} alt="landing" className="max-w-full drop-shadows" />
			</div>
		</div>
	);
}

export default Homepage;
