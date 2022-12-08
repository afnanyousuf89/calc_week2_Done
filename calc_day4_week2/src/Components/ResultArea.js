import './css/calc.css';

function ResultArea({v,clas}) {
	return (
		<div className="ResultArea">
            <input type="text" value={v} className={clas} readOnly />
		</div>
	);
}

export default ResultArea;