import React from 'react';

type CssStylesPropsTypes = {
	style: React.CSSProperties;
};

const CssStyles: React.FunctionComponent<CssStylesPropsTypes> = ({ style = {} }) => {
	return <div style={style}>CssStyles</div>;
};

export default CssStyles;
