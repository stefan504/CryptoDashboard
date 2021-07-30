import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';
import Dashboard from './components/Dashboard';
import Navbar from './components/Navbar';
import Homepage from './components/Homepage';

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
function App() {
	const [coins, setCoins] = useState([]);

	useEffect(() => {
		axios
			.get(
				'https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=48&page=1&sparkline=false'
			)
			.then((res) => {
				setCoins(res.data);
				console.log(res.data);
			});
	}, []);

	return (
		<Router>
			<Navbar />

			<Switch>
				<Route exact path="/homepage">
					<Homepage />
				</Route>
				<Route exact path="/dashboard">
					{' '}
					<Dashboard coins={coins} />
				</Route>
			</Switch>
		</Router>
	);
}

export default App;
