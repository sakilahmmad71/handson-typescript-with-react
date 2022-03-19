import React, { createContext } from 'react';
import { Color } from './theme';
import { Action, initialState } from './ThemeReducer';

interface ContextType {
	state: Color;
	dispatch: React.Dispatch<Action>;
}

const contextinitialState: ContextType = {
	state: initialState,
	dispatch: () => {},
};

export const ThemeContext = createContext(contextinitialState);
