import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';
import Dashboard from './components/Dashboard';
import Navbar from './components/Navbar';
import Homepage from './components/Homepage';
import Profile from './components/Profile';
import Footer from './components/Footer';

import { auth, provider } from './firebase';

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
function App() {
	const [coins, setCoins] = useState([]);
	const [loggedIn, setLoggedIn] = useState(false);
	const [currentUser, setCurrentUser] = useState([]);
	const [favourites, setFavourites] = useState([]);
	const [open, setOpen] = useState(false);

	const handleLogIn = () => {
		auth
			.signInWithPopup(provider)
			.then((res) => {
				setCurrentUser(res);
				setLoggedIn(true);
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
			});
	}, []);

	const addToFavs = (fav) => {
		if (!loggedIn) return alert('you must be logged in to have favourites');
		for (let i = 0; i < favourites.length; i++) {
			if (favourites[i].id === fav.id) {
				return;
			}
		}
		setOpen(true);
		setTimeout(() => {
			setOpen(false);
		}, 2000);
		setFavourites([...favourites, fav]);
	};

	return (
		<Router>
			<Navbar
				loggedIn={loggedIn}
				currentUser={currentUser}
				handleLogIn={handleLogIn}
				handleLogOut={handleLogOut}
			/>

			<Switch>
				<Route exact path="/">
					<Homepage />
				</Route>
				<Route exact path="/dashboard">
					{' '}
					<Dashboard open={open} addToFavs={addToFavs} coins={coins} />
				</Route>
				<Route exact path="/profile">
					<Profile favourites={favourites} currentUser={currentUser} />
				</Route>
			</Switch>
			<Footer />
		</Router>
	);
}

export default App;
// ADD BETTER STYLING TO GRAPHS AND ADD BETTER LOOKING BUTTON TO CARDS.
// ADD ABILITY TO SWTICH FROM 7 DAY LOOK TO HOURLY TO MONTHLY
// ADD SOME BETTER STYLING TO NAVBAR(GRADIENT OR SOMETHING)
