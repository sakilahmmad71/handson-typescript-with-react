import React from 'react';

export type ProfilePropsTypes = {
	name: string;
};

const Profile: React.FunctionComponent<ProfilePropsTypes> = ({ name }) => {
	return <div>Profile of {name}</div>;
};

export default Profile;
