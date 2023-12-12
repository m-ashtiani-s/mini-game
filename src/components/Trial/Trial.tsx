import ReactDOM from "react-dom/client";
import { initJsPsych } from "jspsych";
import jsPsychHtmlKeyboardResponse from "@jspsych/plugin-html-keyboard-response";
import ReactDOMServer from "react-dom/server";
import { randomShapes } from "../../utils/generateRandomShape";
import { randomCells } from "../../utils/generateRandomCells";
import Grid from "../grid/grid";
import AfterTest from "../AfterTest/AfterTest";
type Matrix = number[][];
interface IProps {
	testLevls: number;
}

interface variables{
	image:string;
	items:Matrix;
	time:number
}

export function Trial({ testLevls }: IProps) {
	const uniqueArray = randomShapes(testLevls);
	const randomArrayOfArrays = randomCells(testLevls);
	const vars:variables[] = [];
	for (let i = 0; i < testLevls; i++) {
		const vv = {
			image: `./public/images/${uniqueArray[i].randomString}/${uniqueArray[i].randomNumber}.svg`,
			items: randomArrayOfArrays[i],
			time: (i===0 ? 2000 : 3*vars[i-1].time),
		};
		vars.push(vv as variables);
	}

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
				trial_duration: jsPsych.timelineVariable("time"),
			},
			{
				type: jsPsychHtmlKeyboardResponse,
				prompt: '<p class="salam">if shape is <b>asymetric</b>, press "a" key and if it is <b>symetric</b> press "s"</p>',
				stimulus: function () {
					const html = ReactDOMServer.renderToString(
						<span>
							<img src={jsPsych.timelineVariable("image")} alt="" />
						</span>
					);
					return html;
				},
				choices: ["a", "s"],
				trial_duration: 2500,
			},
		],
		timeline_variables: vars,
	};

	jsPsych.run([face_name_procedure]).then(() => {
		ReactDOM.createRoot(document.getElementById("jspsych-content")!).render(<AfterTest numbers={randomArrayOfArrays as Matrix} />);
	});
	return <></>;
}
