import { Color, theme } from './theme';

export enum Types {
	LIGHT = 'LIGHT',
	DARK = 'DARK',
}

export const initialState: Color = theme.light || localStorage.getItem('theme');

export type Action = {
	type: Types;
};

const themeReducer = (state: Color, action: Action) => {
	switch (action.type) {
		case Types.LIGHT: {
			localStorage.setItem('theme', Types.LIGHT);
			return (state = theme.light);
		}

		case Types.DARK: {
			localStorage.setItem('theme', Types.DARK);
			return (state = theme.dark);
		}

		default:
			throw new Error('Unhandler action.type on "theme reducer"');
	}
};

export default themeReducer;
