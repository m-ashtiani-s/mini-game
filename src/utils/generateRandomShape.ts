import { ImageRandomTypes } from "../types/AllRandomData.types";



export function randomShapes(testLevls:number) {
	const arrayOfObjects:ImageRandomTypes[]  = [];

	while (arrayOfObjects.length < testLevls) {
		const randomString = Math.random() < 0.5 ? "asymmetrical" : "symmetrical";
		const randomNumber = Math.floor(Math.random() * 5) + 1;

		const newObject = {
			randomString,
			randomNumber,
		};

		const isDuplicate = arrayOfObjects.some(
			(obj: ImageRandomTypes) => obj.randomString === newObject.randomString && obj.randomNumber === newObject.randomNumber
		);

		if (!isDuplicate) {
			arrayOfObjects.push(newObject);
		}
	}

	return arrayOfObjects;
}