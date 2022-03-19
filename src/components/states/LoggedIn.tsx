import React, { useState } from 'react';

const LoggedIn: React.FunctionComponent = () => {
	const [isLoggerIn, setIsLoggerIn] = useState(false);

	const handleLogIn = () => setIsLoggerIn(true);

	const handleLogOut = () => setIsLoggerIn(false);

	return (
		<div>
			<button type='button' onClick={handleLogIn}>
				Log In
			</button>

			<button type='button' onClick={handleLogOut}>
				Log Out
			</button>

			<div>{isLoggerIn ? 'Logged In' : 'Logged Out'}</div>
		</div>
	);
};

export default LoggedIn;
