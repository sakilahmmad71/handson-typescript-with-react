import React from 'react';

type RandomNumberType = {
	value: number;
};

type PositiveNumber = RandomNumberType & {
	isPositive: boolean;
	isNegative?: never;
	isZero?: never;
};

type NegativeNumber = RandomNumberType & {
	isNegative: boolean;
	isPositive?: never;
	isZero?: never;
};

type ZeroNumber = RandomNumberType & {
	isZero: boolean;
	isNegative?: never;
	isPositive?: never;
};

type RandomNumberPropsTypes = PositiveNumber | NegativeNumber | ZeroNumber;

const RandomNumber: React.FunctionComponent<RandomNumberPropsTypes> = ({
	value,
	isPositive,
	isNegative,
	isZero,
}) => {
	return (
		<div>
			{value} {isPositive && 'positive'} {isNegative && 'negative'} {isZero && 'zero'}
		</div>
	);
};

export default RandomNumber;
