import React from 'react';
import Login from './Login';
import { ProfilePropsTypes } from './Profile';

type PrivatePropsTypes = {
	isLoggedIn: boolean;
	component: React.ComponentType<ProfilePropsTypes>;
};

const Private: React.FunctionComponent<PrivatePropsTypes> = ({
	isLoggedIn,
	component: Component,
}) => {
	if (isLoggedIn) {
		return <Component name='Shakil Ahmed' />;
	}

	return <Login />;
};

export default Private;
