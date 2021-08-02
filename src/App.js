import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';
import Dashboard from './components/Dashboard';
import Navbar from './components/Navbar';
import Homepage from './components/Homepage';
import Profile from './components/Profile';
import { auth, provider } from './firebase';

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
function App() {
	const [coins, setCoins] = useState([]);
	const [loggedIn, setLoggedIn] = useState(false);
	const [currentUser, setCurrentUser] = useState([]);

	const handleLogIn = () => {
		auth
			.signInWithPopup(provider)
			.then((res) => {
				setCurrentUser(res);
				setLoggedIn(true);
				console.log(res);
			})
			.catch((err) => {
				setLoggedIn(false);
				console.log('Failed to sign in with google.');
			});
	};
	const handleLogOut = () => {
		auth
			.signOut()
			.then((res) => {
				setCurrentUser(null);
				setLoggedIn(false);
			})
			.catch((err) => {
				setLoggedIn(false);
				console.log('Failed to sign out.');
			});
	};

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
			<Navbar
				loggedIn={loggedIn}
				currentUser={currentUser}
				handleLogIn={handleLogIn}
				handleLogOut={handleLogOut}
			/>

			<Switch>
				<Route exact path="/homepage">
					<Homepage />
				</Route>
				<Route exact path="/dashboard">
					{' '}
					<Dashboard coins={coins} />
				</Route>
				<Route exact path="/profile">
					<Profile currentUser={currentUser} />
				</Route>
			</Switch>
		</Router>
	);
}

export default App;
