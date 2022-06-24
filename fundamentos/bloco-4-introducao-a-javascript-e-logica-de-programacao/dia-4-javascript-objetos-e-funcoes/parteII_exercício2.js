// 2 - Crie uma função que receba um array de inteiros e retorne o índice do maior valor.

let arrayTest = [2, 3, 6, 7, 10, 1];

function isBiggerInArray(array) {
	let bigger = array[0];
	let arrayBiggerPosition = [];
	for (let i in array) {
		if (array[i] > bigger){
			bigger = array[i];
		}
	}
	for (let i in array) {
		if (array[i] === bigger){
			arrayBiggerPosition.push(i);
		}
	}
	return arrayBiggerPosition;
}

console.log(isBiggerInArray(arrayTest));