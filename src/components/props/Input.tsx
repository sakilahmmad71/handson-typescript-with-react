import React from 'react';

type InputPropsTypes = {
	value: string;
	handleChangeValue: (event: React.ChangeEvent<HTMLInputElement>) => void;
};

const Input: React.FunctionComponent<InputPropsTypes> = ({ value = '', handleChangeValue }) => {
	// const handleChangeValue = (event: React.ChangeEvent<HTMLInputElement>) => {
	// 	console.log(event.target.value);
	// };

	return (
		<input type='text' value={value} onChange={handleChangeValue}>
			Input
		</input>
	);
};

export default Input;
