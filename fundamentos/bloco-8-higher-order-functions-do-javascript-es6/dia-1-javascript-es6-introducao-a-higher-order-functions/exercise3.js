const RIGHT_ANSWERS = ['A', 'C', 'B', 'D', 'A', 'A', 'D', 'A', 'D', 'C'];
const STUDENT_ANSWERS = ['A', 'N.A', 'B', 'D', 'A', 'C', 'N.A', 'A', 'D', 'B'];

const check = (x, y) => {
	let mark;
	if (x === y) {
		mark = 1;
	} else {
		mark = - 0.5
	}
	if (y === 'N.A') {
		mark = 0
	}
	return mark; 
}

const avaliator = (answer, result, check) => {
	let score = 0;
	for (let i = 0; i < RIGHT_ANSWERS.length; i += 1) {
		score += check(RIGHT_ANSWERS[i], STUDENT_ANSWERS[i]);
	}
	return score
}

console.log(avaliator(RIGHT_ANSWERS, STUDENT_ANSWERS, check));