// 3 - Crie uma função que receba um array de inteiros e retorne o índice do menor valor.

let arrayTest= [2, 4, 6, 7, 10, 0, -3];

function isSmallerInArray(array) {
	let smaller = array[0];
	let arraysmallerPosition = [];
	for (let i in array) {
		if (array[i] < smaller){
			smaller = array[i];
		}
	}
	for (let i in array) {
		if (array[i] === smaller){
			arraysmallerPosition.push(i);
		}
	}
	return arraysmallerPosition;
}

console.log(isSmallerInArray(arrayTest));