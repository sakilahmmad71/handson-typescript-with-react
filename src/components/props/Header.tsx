import { ReactChild, ReactChildren } from 'react';

type HeaderPropsTypes = {
	children: ReactChild | ReactChild[] | ReactChildren | ReactChildren[];
};

const Header: React.FunctionComponent<HeaderPropsTypes> = ({ children = null }) => {
	return <div>{children}</div>;
};

export default Header;
