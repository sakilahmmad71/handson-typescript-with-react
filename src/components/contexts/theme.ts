export type Color = {
	background: string;
	color: string;
};

export type Theme = {
	light: Color;
	dark: Color;
};

export const theme: Theme = {
	light: {
		background: '#fff',
		color: '#000',
	},
	dark: {
		background: '#000',
		color: '#fff',
	},
};
