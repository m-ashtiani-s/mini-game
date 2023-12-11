interface Iprops{
	setTrialShow:React.Dispatch<React.SetStateAction<boolean>>
  }

function BeforeTest({setTrialShow}:Iprops) {
	return <div>
        <button onClick={()=>setTrialShow(true)}>Show test</button>
    </div>;
}

export default BeforeTest;
