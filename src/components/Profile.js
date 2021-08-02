import React from 'react';

function Profile({ currentUser }) {
	if (
		currentUser === [] ||
		currentUser === null ||
		currentUser.additionalUserInfo == undefined
	) {
		return <h2>No active user</h2>;
	} else {
		return (
			<div>
				<h2>Welcome, {currentUser.additionalUserInfo.profile.given_name}</h2>
			</div>
		);
	}
}

export default Profile;
