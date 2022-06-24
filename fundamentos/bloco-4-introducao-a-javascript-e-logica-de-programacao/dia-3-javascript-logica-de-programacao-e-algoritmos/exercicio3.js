// Escreva dois algoritmos: um que retorne a maior palavra deste array e outro que retorne a menor. Considere o número de caracteres de cada palavra.

let array = ['java', 'javascript', 'python', 'html', 'css'];
let bigger = array[0].length;
let smaller = array[0].length;

for (let i = 0; i < array.length; i += 1) {
	if (array[i].length > bigger) {
		bigger = array[i].length;
	}
	if (array[i].length < smaller) {
		smaller = array[i].length;
	}
}

for (let i = 0; i < array.length; i += 1) {
	if (array[i].length === bigger) {
		console.log ('Essa é a ou uma das maiores palavras do array: ' + array[i]);
	}
	if (array[i].length === smaller) {
		console.log ('Essa é a ou uma das menores palavras do array: ' + array[i]);
	}
}