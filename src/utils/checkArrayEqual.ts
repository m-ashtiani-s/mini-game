export function areArraysEqual(arr1: number[], arr2: number[]) {
	if (arr1.length !== arr2.length) {
		return false;
	}

	const sortedArr1 = arr1.slice().sort();
	const sortedArr2 = arr2.slice().sort();

	for (let i = 0; i < arr1.length; i++) {
		if (sortedArr1[i] !== sortedArr2[i]) {
			return false;
		}
	}
	return true;
}
