import { useEffect } from 'react';

const arr = [];

export default function TestGc() {
	useEffect(() => {
		arr.push(new Array(100000).fill(1));
		// return (() => {
		//   arr = null;
		// });
	}, []);

	return <div>테수투</div>;
}
