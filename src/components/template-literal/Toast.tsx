import React from 'react';

type VerticalAlignment = 'left' | 'center' | 'right';
type HorizontalAlignment = 'top' | 'center' | 'bottom';

type ToastPropsTypes = {
	postion: Exclude<`${VerticalAlignment}-${HorizontalAlignment}`, 'center-center'> | 'center';
};

const Toast: React.FunctionComponent<ToastPropsTypes> = ({ postion = 'left-bottom' }) => {
	return <div>Toast Notification Position - {postion}</div>;
};

export default Toast;
