// 1. Crie uma função que receba um número e retorne seu fatorial. 
function factorial(x) {
	let n = x;
	let sum = 1;

	while (n > 0) {
		sum *= n;
		n = n -1;
	}
	return sum;
}

console.log(factorial(5))

// 2. Crie uma função que receba uma frase e retorne a maior palavra. 

const example = 'Antônio foi no banheiro e não sabemos o que aconteceu';// retorna 'aconteceu'

function longestWord(example) {
	let bigger = 0;
	let word;
	const array1 = example.split(" ");
	console.log(array1);
	for (let i of array1) {
		if (i.length > bigger) {
			bigger = i.length;
			word = i;
		}
	}
	return word;
}

console.log(longestWord(example));

// 3. 