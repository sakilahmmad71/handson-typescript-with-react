import React, { useEffect, useRef, useState } from 'react';

const MutableRefs: React.FunctionComponent = () => {
	const [timer, setTimer] = useState(0);
	const timerRef = useRef<number | null>(null);

	const handleStopTimer = () => {
		if (timerRef.current) {
			window.clearInterval(timerRef.current);
		}
	};

	useEffect(() => {
		timerRef.current = window.setInterval(() => setTimer((time) => time + 1), 1000);

		return () => {
			handleStopTimer();
		};
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	return (
		<div>
			<h1>Timer - {timer}</h1>
			<button type='button' onClick={handleStopTimer}>
				Stop Timer
			</button>
		</div>
	);
};

export default MutableRefs;
