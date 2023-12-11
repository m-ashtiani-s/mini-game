import { useState } from "react";
import BeforeTest from "./components/BeforeTest/BeforeTest";
import { Trial } from "./components/Trial/Trial";
import "./index.css";


export function App() {
	const [trialShow,setTrialShow]=useState<boolean>(false)
	
	return <>
	
	{trialShow ? <Trial/> : <BeforeTest setTrialShow={setTrialShow} />}
	</>;
}
