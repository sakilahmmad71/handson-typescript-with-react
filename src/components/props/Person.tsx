import React from 'react';

type PersonPropsTypes = {
	name: {
		first: string;
		last: string;
	};
};

const Person: React.FunctionComponent<PersonPropsTypes> = ({
	name: { first = 'Shakil', last = 'Ahmed' },
}) => {
	return (
		<div>
			{first} {last}
		</div>
	);
};

export default Person;
