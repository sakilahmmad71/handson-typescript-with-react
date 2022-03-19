import React, { useState } from 'react';

type UserStateTypes = {
	name: string;
	email: string;
};

const UserAssertion: React.FunctionComponent = () => {
	const [user, setUser] = useState<UserStateTypes>({} as UserStateTypes);

	const handleSetUser = () => setUser({ name: 'Shakil', email: 'sakilahmmad71@gmail.com' });

	return (
		<div>
			<button type='button' onClick={handleSetUser}>
				Set New User
			</button>

			<div>
				<p>User name is {user.name}</p>
				<p>User email is {user.email}</p>
			</div>
		</div>
	);
};

export default UserAssertion;
