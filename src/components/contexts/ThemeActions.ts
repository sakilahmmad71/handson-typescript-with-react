import React from 'react';
import { Action, Types } from './ThemeReducer';

export const lightTheme = (dispatch: React.Dispatch<Action>) => {
	const action: Action = { type: Types.LIGHT };
	return dispatch(action);
};

export const darkTheme = (dispatch: React.Dispatch<Action>) => {
	const action: Action = { type: Types.DARK };
	return dispatch(action);
};
