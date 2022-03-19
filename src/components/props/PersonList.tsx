import React from 'react';

type PersonListPropsTypes = {
	names: {
		first: string;
		last: string;
	}[];
};

const PersonList: React.FunctionComponent<PersonListPropsTypes> = ({ names = [] }) => {
	return (
		<div>
			{names.map((name, index) => (
				<p key={index}>
					{name.first} {name.last}
				</p>
			))}
		</div>
	);
};

export default PersonList;
