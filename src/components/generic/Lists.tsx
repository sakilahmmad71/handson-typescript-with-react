import React from 'react';

type ListsPropsTypes<T> = {
	items: T[];
	onClick: (value: T) => void;
};

const Lists = <T extends {}>({ items, onClick }: ListsPropsTypes<T>) => {
	return (
		<div>
			{items.map((item, index) => (
				<div key={index} onClick={() => onClick(item)}>
					{item}
				</div>
			))}
		</div>
	);
};

export default Lists;
