// 4 - Crie uma função que receba um array de nomes e retorne o nome com a maior quantidade de caracteres.

let arrayTest = ['José', 'Lucas', 'Nádia', 'Fernanda', 'Cairo', 'Joana'];

function isBiggerInArray(array) {
	let bigger = array[0].length;
	let arrayBiggerPosition = [];
	for (let i in array) {
		if (array[i].length > bigger){
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