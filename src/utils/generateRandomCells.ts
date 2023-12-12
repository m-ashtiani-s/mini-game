export function randomCells(testLevls:number) {
	const result = [];

	for (let i = 0; i < testLevls+1; i++) {
		const subArray = new Set();

		while (subArray.size <= i) {
			const randomNumber = Math.floor(Math.random() * 16);
			subArray.add(randomNumber);
		}

		result.push(Array.from(subArray));
	}

	return result;
}
