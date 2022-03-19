import React from 'react';

type HtmlInputPropsTypes = React.ComponentProps<'input'>;

const HtmlInput: React.FunctionComponent<HtmlInputPropsTypes> = (props) => {
	return <input {...props} />;
};

export default HtmlInput;
