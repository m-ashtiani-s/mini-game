import Shape from "../shape/shape";

interface Iprops{
	numbers:(number[])[]
  }

function AfterTest({numbers}:Iprops) {
	return <div><Shape numbers={numbers} /></div>;
}

export default AfterTest;
