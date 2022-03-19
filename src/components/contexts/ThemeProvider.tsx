import React, { useMemo, useReducer } from 'react';
import { ThemeContext } from './ThemeContext';
import themeReducer, { initialState } from './ThemeReducer';

type ChildrenPropsTypes = {
	children: React.ReactNode;
};

const ThemeProvider: React.FunctionComponent<ChildrenPropsTypes> = ({ children }) => {
	const [state, dispatch] = useReducer(themeReducer, initialState);

	const value = useMemo(() => ({ state, dispatch }), [state]);

	return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>;
};

export default ThemeProvider;
