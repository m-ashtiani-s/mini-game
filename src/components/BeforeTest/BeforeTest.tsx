import { motion } from "framer-motion";
import { ChangeEvent, useState } from "react";
interface Iprops {
	setTrialShow: React.Dispatch<React.SetStateAction<boolean>>;
	setTestLevels: React.Dispatch<React.SetStateAction<number>>;
}

function BeforeTest({ setTrialShow, setTestLevels }: Iprops) {
  const [levelInput, setLevelInput] = useState<number>(0);
	const levelInputHandler = (e: ChangeEvent<HTMLInputElement>) => {
		!!parseInt(e.target.value) && setLevelInput(parseInt(e.target.value));
	};
  const showTestHandler=()=>{
    setTestLevels(levelInput)
    setTrialShow(true)
  }

	return (
		<motion.div initial={{ y: 200, opacity: 0 }} animate={{ y: 0, opacity: 1 }}>
			<h2>Enter test levels (number)</h2>
			<input type="number" onChange={levelInputHandler} />
			<button onClick={showTestHandler}>Show test</button>
		</motion.div>
	);
}

export default BeforeTest;
