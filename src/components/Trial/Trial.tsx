import ReactDOM from "react-dom/client";
import { initJsPsych } from "jspsych";
import jsPsychHtmlKeyboardResponse from "@jspsych/plugin-html-keyboard-response";
import ReactDOMServer from "react-dom/server";
import { randomShapes } from "../../utils/generateRandomShape";
import { randomCells } from "../../utils/generateRandomCells";
import Grid from "../grid/grid";
import AfterTest from "../AfterTest/AfterTest";
type Matrix = number[][];


export function Trial() {
	const uniqueArray = randomShapes();
	const randomArrayOfArrays = randomCells();

	const jsPsych = initJsPsych();
	const face_name_procedure = {
		timeline: [
			{
				type: jsPsychHtmlKeyboardResponse,
				stimulus: function () {
					const html = ReactDOMServer.renderToString(<Grid coloredCellIndices={jsPsych.timelineVariable("items")} />);
					return html;
				},
				choices: "NO_KEYS",
				trial_duration: 2000,
				// trial_duration: jsPsych.timelineVariable("t"),
			},
			{
				type: jsPsychHtmlKeyboardResponse,
				prompt: '<p class="salam">if shape is <b>asymetric</b>, press "a" key and if it is <b>symetric</b> press "b"</p>',
				stimulus: function () {
					const html = ReactDOMServer.renderToString(
						<span>
							<img src={jsPsych.timelineVariable("face")} alt="" />
						</span>
					);
					return html;
				},
				choices: ['a','b'],
				trial_duration: 2500,
			},
		],
		timeline_variables: [
			{ face: `./public/images/${uniqueArray[0].randomString}/${uniqueArray[0].randomNumber}.svg`, items: randomArrayOfArrays[0], t: 2000 },
			{ face: `./public/images/${uniqueArray[1].randomString}/${uniqueArray[1].randomNumber}.svg`, items: randomArrayOfArrays[1], t: 6000 },
			{ face: `./public/images/${uniqueArray[2].randomString}/${uniqueArray[2].randomNumber}.svg`, items: randomArrayOfArrays[2], t: 18000 },
			{ face: `./public/images/${uniqueArray[3].randomString}/${uniqueArray[3].randomNumber}.svg`, items: randomArrayOfArrays[3], t: 46000 },
			{ face: `./public/images/${uniqueArray[4].randomString}/${uniqueArray[4].randomNumber}.svg`, items: randomArrayOfArrays[4], t: 138000 },
		],
	};

	jsPsych.run([face_name_procedure]).then(() => {
		ReactDOM.createRoot(document.getElementById("jspsych-content")!).render(<AfterTest numbers={randomArrayOfArrays as Matrix} />);
	});
	return <></>;
}
