import { useState } from 'react';
import './css/calc.css';
import ResultArea from './ResultArea';
import Nbutton from './Nbutton';

function Calc() {
	//const [firstValue, setfirstValue] = useState(0);
	//const [secondValue, setsecondValue] = useState(0);
	const [finalValue, setFinalValue] = useState('');
	//const [opt, setOpt] = useState('');

	// function setOperator(v) {
	// 	setOpt(v);
	// }


	function btnClick(v) {
		switch (v) {
			case 'Clear':
			case 'clear':
				setFinalValue('');
				//setOperator('');
				//setfirstValue(0);
				//setsecondValue(0);
				break;

			case 'r':
			case 'R':
				setFinalValue(finalValue.slice(0, -1));
				break;
			// case 1:
			// case 2:
			// case 3:
			// case 4:
			// case 5:
			// case 6:
			// case 7:
			// case 8:
			// case 9:
			// case 0:
			// 	if (firstValue === 0) {
			// 		setfirstValue(v);
			// 		setFinalValue(firstValue+secondValue);
			// 	}
			// 	else {
			// 		setsecondValue(v);
			// 		setFinalValue(firstValue+secondValue);
			// 	}
			// 	break;

			case 'X':
			case 'x':
				setFinalValue(finalValue + "*");
				break;

			default:
				setFinalValue(finalValue + "" + v);
				break;
		}
	}

	function Result() {

		setFinalValue(eval(finalValue));
		//console.log(opt);
		//console.log(firstValue);
		//console.log(secondValue);
		//setFinalValue(0);
		//setOperator('');
		//setfirstValue(0);
		//setsecondValue(0);
	}

	return (
		<div className="main">
			<div className="calc">
				<ResultArea v={finalValue} />

				<Nbutton v="Clear" onclick={() => btnClick('Clear')} clas="btn-v-sp" />
				<Nbutton v="CE" onclick={() => btnClick('r')} clas="btn-v-sp" />

				<Nbutton v="1" onclick={(e) => btnClick(e.target.value)} clas="btn" />
				<Nbutton v="2" onclick={(e) => btnClick(e.target.value)} clas="btn" />
				<Nbutton v="3" onclick={(e) => btnClick(e.target.value)} clas="btn" />

				<Nbutton v="+" onclick={(e) => btnClick(e.target.value)} clas="btn-sp" />

				<Nbutton v="4" onclick={(e) => btnClick(e.target.value)} clas="btn" />
				<Nbutton v="5" onclick={(e) => btnClick(e.target.value)} clas="btn" />
				<Nbutton v="6" onclick={(e) => btnClick(e.target.value)} clas="btn" />

				<Nbutton v="-" onclick={(e) => btnClick(e.target.value)} clas="btn-sp" />

				<Nbutton v="7" onclick={(e) => btnClick(e.target.value)} clas="btn" />
				<Nbutton v="8" onclick={(e) => btnClick(e.target.value)} clas="btn" />
				<Nbutton v="9" onclick={(e) => btnClick(e.target.value)} clas="btn" />

				<Nbutton v="X" onclick={(e) => btnClick(e.target.value)} clas="btn-sp" />

				<Nbutton v="0" onclick={(e) => btnClick(e.target.value)} clas="btn" />
				<Nbutton v="." onclick={(e) => btnClick(e.target.value)} clas="btn" />

				<Nbutton v="=" onclick={() => Result()} clas="btn-sp" />
				<Nbutton v="/" onclick={(e) => btnClick(e.target.value)} clas="btn-sp" />

			</div>
		</div>
	);
}

export default Calc;