import React from 'react';
import { darkTheme, lightTheme } from './ThemeActions';
import useTheme from './useTheme';

const Box: React.FunctionComponent = () => {
	const { state, dispatch } = useTheme();

	const handleLightTheme = () => lightTheme(dispatch);
	const handleDarkTheme = () => darkTheme(dispatch);

	return (
		<div>
			<button type='button' onClick={handleLightTheme}>
				light
			</button>
			<button type='button' onClick={handleDarkTheme}>
				dark
			</button>

			<div style={state}>Apply theme here!</div>
		</div>
	);
};

export default Box;
