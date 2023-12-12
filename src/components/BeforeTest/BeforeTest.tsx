import { motion } from "framer-motion";
import { ChangeEvent, useEffect, useState } from "react";
interface Iprops {
	setTrialShow: React.Dispatch<React.SetStateAction<boolean>>;
	setTestLevels: React.Dispatch<React.SetStateAction<number>>;
}

function BeforeTest({ setTrialShow, setTestLevels }: Iprops) {
	const [levelInput, setLevelInput] = useState<number>(0);
  const [disabled,setDisabled]=useState<boolean>(true)
	const levelInputHandler = (e: ChangeEvent<HTMLInputElement>) => {
		setLevelInput(parseInt(e.target.value));
	};
	const showTestHandler = () => {
		if (levelInput > 0) {
			setTestLevels(levelInput);
			setTrialShow(true);
		} else {
			alert("Enter a valid number (Greater than 0)");
		}
	};

  useEffect(()=>{
    !!levelInput && levelInput>0 ? setDisabled(false) : setDisabled(true)
  },[levelInput])

	return (
		// <motion.div initial={{ y: 200, opacity: 0 }} animate={{ y: 0, opacity: 1 }}>
		// 	<h2>Enter test levels (number)</h2>
		// 	<input type="number" onChange={levelInputHandler} />
		// 	<button onClick={showTestHandler}>Show test</button>
		// </motion.div>
		<div className="">
			<motion.section className="pb-8 pt-4 border border-b-1 border-secondary border-opacity-20" initial={{y:-200,opacity:0}} animate={{y:0,opacity:1}}>
				<div className="container w-10/12 mx-auto">
					<div className="flex items-center">
						<div className="flex flex-col gap-4 w-6/12">
							<h1 className="font-bold text-primary text-3xl">Symmetrical Shapes React Game</h1>
							<span className="text-lg text-secondary">Increase your concentration power</span>
						</div>
						<div className="flex w-6/12 flex-row-reverse">
							<a className="flex items-center gap-1 py-2 px-4 rounded-md duration-300 hover:bg-green-600" href="https://github.com/m-ashtiani-s">
								<span>
									<img src="./public/images/github.svg" alt="" />
								</span>
								<span className="text-secondary text-lg font-medium">m-ashtiani-s</span>
							</a>
						</div>
					</div>
				</div>
			</motion.section>
			<motion.section className="pb-8 pt-4 " initial={{y:-200,opacity:0}} animate={{y:0,opacity:1}} transition={{delay:0.5}}>
				<div className="container w-10/12 mx-auto">
					<div className="flex flex-col gap-4 items-center">
						<div className="font-medium text-primary text-2xl">type level numbers start game</div>
						<input
							type="number"
							min={1}
							onChange={levelInputHandler}
							className="border border-secondary border-opacity-20 px-4 py-2 rounded-md outline-none focus:border-opacity-60 duration-300"
						/>
						<button
            disabled={disabled}
							onClick={showTestHandler}
							className="bg-primary hover:bg-green-500 duration-300 rounded-md py-3 px-4 text-bg font-medium disabled:opacity-50 disabled:cursor-not-allowed"
						>
							Show test
						</button>
					</div>
				</div>
			</motion.section>
		</div>
	);
}

export default BeforeTest;
