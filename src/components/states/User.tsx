import React, { useState } from 'react';

type UserStateTypes = {
	name: string;
	email: string;
};

const User: React.FunctionComponent = () => {
	const [user, setUser] = useState<UserStateTypes | null>(null);

	const handleSetUser = () => setUser({ name: 'Shakil', email: 'sakilahmmad71@gmail.com' });

	const handleRemoveUser = () => setUser(null);

	return (
		<div>
			<button type='button' onClick={handleSetUser}>
				Set New User
			</button>
			<button type='button' onClick={handleRemoveUser}>
				Remove User
			</button>

			<div>
				<p>User name is {user?.name}</p>
				<p>User email is {user?.email}</p>
			</div>
		</div>
	);
};

export default User;
