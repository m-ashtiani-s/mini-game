export function randomCells() {
	const result = [];

	for (let i = 0; i < 6; i++) {
		const subArray = new Set();

		while (subArray.size <= i) {
			const randomNumber = Math.floor(Math.random() * 16);
			subArray.add(randomNumber);
		}

		result.push(Array.from(subArray));
	}

	return result;
}
