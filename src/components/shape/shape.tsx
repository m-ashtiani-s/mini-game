import { useEffect, useRef, useState } from "react";
import { areArraysEqual } from "../../utils/checkArrayEqual";

interface Iprops {
	numbers: number[][];
}
interface allClicked {
	arr: number[];
}

const Shape = ({ numbers }: Iprops) => {
	const num = useRef<number>(0);
	const [all, setAll] = useState<allClicked[]>([]);
	const [clicked, setClicked] = useState<number[]>([]);
	const [score, setScore] = useState<number>(0);
	const [showGrid, setShowGrid] = useState<boolean>(true);
	const cellClickHandler = (i: number) => {
		if (clicked.length < numbers[num.current]?.length && !clicked.includes(i)) {
			setClicked([...clicked, i]);
		}
	};

	useEffect(() => {
		if (clicked.length == numbers[num.current]?.length - 1) {
			setAll([...all, { arr: clicked }]);
			setTimeout(() => {
				setClicked([]);
				num.current = num.current + 1;
			}, 300);
		}
	}, [clicked]);

	useEffect(() => {
		if (num.current == numbers.length) {
			setShowGrid(false);
			for (let level = 0; level < numbers?.length - 1; level++) {
				areArraysEqual(all[level + 1].arr, numbers[level]) && setScore((lastScore) => lastScore + 1);
			}
		}
	}, [num.current]);
	const grid = Array.from({ length: 16 }, (_, index) => {
		return (
			<div
				key={index}
				style={{
					width: "50px",
					height: "50px",
					border: "1px solid #000",
					backgroundColor: clicked.includes(index) ? "green" : "white",
					cursor: "pointer",
				}}
				onClick={() => cellClickHandler(index)}
			></div>
		);
	});

	return (
		<>
			{showGrid ? (
				<div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: "5px" }}>{grid}</div>
			) : (
				<span>your score is: {score}</span>
			)}
		</>
	);
};

export default Shape;
