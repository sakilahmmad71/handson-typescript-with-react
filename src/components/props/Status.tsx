import React from 'react';

type StatusPropsTypes = {
	status: 'loading' | 'success' | 'failure';
};

const Status: React.FunctionComponent<StatusPropsTypes> = ({ status = 'loading' }) => {
	let message;

	if (status === 'loading') {
		message = 'Request for api data';
	} else if (status === 'success') {
		message = 'Request success';
	} else if (status === 'failure') {
		message = 'Request failed';
	}

	return <div>{message}</div>;
};

export default Status;
