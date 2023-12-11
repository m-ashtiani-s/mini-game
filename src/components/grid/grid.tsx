import React from "react";

interface GridProps {
	coloredCellIndices: number[];
}

const Grid: React.FC<GridProps> = ({ coloredCellIndices }: GridProps) => {
	const grid = Array.from({ length: 16 }, (_, index) => (
		<div
			key={index}
			style={{
				width: "50px",
				height: "50px",
				border: "1px solid #000",
				backgroundColor: coloredCellIndices.includes(index) ? "blue" : "white",
			}}
		></div>
	));

	return <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: "5px" }}>{grid}</div>;
};

export default Grid;
