import ReactDOM from "react-dom/client";
import { App } from "./App";
import "./index.css";
import Grid from "./components/grid/grid";
import { initJsPsych } from "jspsych";
import jsPsychHtmlKeyboardResponse from "@jspsych/plugin-html-keyboard-response";
import ReactDOMServer from "react-dom/server";

ReactDOM.createRoot(document.getElementById("root")!).render(<App />);
function generateRandomArrayOfArrays() {
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

const jsPsych = initJsPsych();
const randomArrayOfArrays = generateRandomArrayOfArrays();
const face_name_procedure = {
	timeline: [
		{
			type: jsPsychHtmlKeyboardResponse,
			stimulus: function () {
				const html = ReactDOMServer.renderToString(<Grid coloredCellIndices={jsPsych.timelineVariable("items")} />);
				return html;
			},
			choices: "NO_KEYS",
			trial_duration: 250,
		},
		{
			type: jsPsychHtmlKeyboardResponse,
			stimulus: function () {
				const html = ReactDOMServer.renderToString(<span>مرحله 2</span>);
				return html;
			},
			choices: "NO_KEYS",
			trial_duration: 250,
		},
	],
	timeline_variables: [
		{ face: "person-1.jpg", name: "Alex", items: randomArrayOfArrays[0] },
		{ face: "person-2.jpg", name: "Beth", items: randomArrayOfArrays[1] },
		{ face: "person-3.jpg", name: "Chad", items: randomArrayOfArrays[2] },
		{ face: "person-3.jpg", name: "Chad", items: randomArrayOfArrays[2] },
		{ face: "person-3.jpg", name: "Chad", items: randomArrayOfArrays[2] },
	],
};

jsPsych.run([face_name_procedure])
