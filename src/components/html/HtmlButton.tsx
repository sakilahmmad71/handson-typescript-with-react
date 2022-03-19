import React from 'react';

type HtmlButtonPropsTypes = {
	variant: 'primary' | 'secondary';
	children: string;
} & Omit<React.ComponentProps<'button'>, 'children'>;

const HtmlButton: React.FunctionComponent<HtmlButtonPropsTypes> = ({
	variant = 'primary',
	children,
	...rest
}) => {
	return (
		<button type='button' className={`button-${variant}`} {...rest}>
			{children}
		</button>
	);
};

export default HtmlButton;
