import React from 'react';

type GreetPropsTypes = {
	name: string;
	messageCount?: number;
	isLoggedIn: boolean;
};

const Greet: React.FunctionComponent<GreetPropsTypes> = ({
	name = 'Shakil',
	messageCount = 0,
	isLoggedIn = false,
}) => {
	return (
		<div>
			{isLoggedIn ? `Hello ${name}, You have ${messageCount} unread messages` : `Welcome Guest`}
		</div>
	);
};

export default Greet;
