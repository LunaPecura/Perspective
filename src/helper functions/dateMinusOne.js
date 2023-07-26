const dateMinusOne = date => {
	const [y, m, d] = date.split('-').map(str => parseInt(str));
	
	if(d !== 1) { return `${y}-${m}-${d-1}` }
	else if(m !== 1) { // d === 1
		switch(m-1) {
			case 1: 
			case 3:
			case 5:
			case 7:
			case 8:
			case 10:
			case 12: return `${y}-${m-1}-31`; break;
			case 4:
			case 6:
			case 9:
			case 11: return `${y}-${m-1}-30`; break;
			case 2: return `${y}-${m-1}-28`; break;
		}
	} else { return `${y-1}-12-31`; } // d == 1 && m == 1
}

export default dateMinusOne