import React, { useReducer } from 'react';

enum Types {
	INCREMENT = 'INCREMENT',
	DECREMENT = 'DECREMENT',
	RESET = 'RESET',
}

type State = {
	count: number;
};

const initialState: State = { count: 0 };

type UpdateAction = {
	type: Types.INCREMENT | Types.DECREMENT;
	payload: number;
};

type ResetAction = {
	type: Types.RESET;
};

type Action = UpdateAction | ResetAction;

const reducer = (state: State = initialState, action: Action) => {
	switch (action.type) {
		case Types.INCREMENT:
			return { count: state.count + action.payload };

		case Types.DECREMENT:
			return { count: state.count - action.payload };

		case Types.RESET:
			return initialState;

		default:
			throw new Error('Unhandler action.type on "counter reducer"');
	}
};

const incrementCounter = (dispatch: React.Dispatch<Action>, payload: number) => {
	const action: Action = { type: Types.INCREMENT, payload };
	return dispatch(action);
};

const decrementCounter = (dispatch: React.Dispatch<Action>, payload: number) => {
	const action: Action = { type: Types.DECREMENT, payload };
	return dispatch(action);
};

const resetCounter = (dispatch: React.Dispatch<Action>) => {
	const action: Action = { type: Types.RESET };
	return dispatch(action);
};

const Counter: React.FunctionComponent = () => {
	const [state, dispatch] = useReducer(reducer, initialState);
	/* const [state, dispatch] = useReducer<(state: State, action: Action) => State>(reducer, initialState); */

	const handleIncrement = () => incrementCounter(dispatch, 10);
	const handleDecrement = () => decrementCounter(dispatch, 10);
	const handleReset = () => resetCounter(dispatch);

	return (
		<div>
			<button type='button' onClick={handleIncrement}>
				Increment By 10
			</button>
			<button type='button' onClick={handleDecrement}>
				Decrement By 10
			</button>

			<h1>{state.count}</h1>

			<button type='button' onClick={handleReset}>
				Reset
			</button>
		</div>
	);
};

export default Counter;
