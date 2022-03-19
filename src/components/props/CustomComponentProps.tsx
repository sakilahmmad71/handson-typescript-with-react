import React from 'react';
import Greet from './Greet';

/** This is kind of extended component of Greet which contains all the props access from the Greet component */

const CustomComponentProps: React.FunctionComponent<React.ComponentProps<typeof Greet>> = (
	props
) => {
	return (
		<div>
			{props.name} - {props.messageCount}
		</div>
	);
};

export default CustomComponentProps;
