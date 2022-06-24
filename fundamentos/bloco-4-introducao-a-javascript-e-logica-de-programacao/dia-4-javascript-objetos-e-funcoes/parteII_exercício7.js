// 7 - Crie uma função que receba uma string word e outra string ending. Verifique se a string ending é o final 
// da string word. Considere que a string ending sempre será menor que a string word.

let one = 'trybe';
let two = 'xbe';

function endIsEqual (m, n) {
	for (let i = two.length; i > 0; i -= 1) {
		let dif = one.length - two.length;
		if (two[i - 1] !== one[dif + i - 1]) {
			return false;
		}
	}
	return true;
}

console.log(endIsEqual(one, two));