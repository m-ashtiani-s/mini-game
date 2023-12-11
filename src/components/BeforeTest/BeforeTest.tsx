import {motion} from 'framer-motion'
interface Iprops{
	setTrialShow:React.Dispatch<React.SetStateAction<boolean>>
  }

function BeforeTest({setTrialShow}:Iprops) {
	return <div>
        <motion.button initial={{y:200,opacity:0}} animate={{y:0,opacity:1}} onClick={()=>setTrialShow(true)}>Show test</motion.button>
    </div>;
}

export default BeforeTest;
