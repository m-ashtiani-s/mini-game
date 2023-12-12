import { useState } from "react";
import BeforeTest from "./components/BeforeTest/BeforeTest";
import { Trial } from "./components/Trial/Trial";
import "./index.css";

export function App() {
	const [trialShow, setTrialShow] = useState<boolean>(false);
	const [testLevls, setTestLevels] = useState<number>(0);

	return <>{trialShow && testLevls>0 ? <Trial testLevls={testLevls} /> : <BeforeTest setTrialShow={setTrialShow} setTestLevels={setTestLevels} />}</>;
}
