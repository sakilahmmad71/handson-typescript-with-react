import React from 'react';

type ButtonPropsTypes = {
	handleClickButton: (event: React.MouseEvent<HTMLButtonElement>, id: number) => void;
};

const Button: React.FunctionComponent<ButtonPropsTypes> = ({ handleClickButton }) => {
	return (
		<button type='button' onClick={(event) => handleClickButton(event, 1)}>
			Button
		</button>
	);
};

export default Button;
