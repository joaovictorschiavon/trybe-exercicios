// 6 - Crie uma função que receba um número natural (número inteiro não negativo) N e retorne o 
// somatório de todos os números de 1 até N.

let numberTest = 5;

function somatorio (n) {
	let soma = 0;
	for (let i = 0; i <= n; i += 1) {
		soma += i;
	}
	return soma;
}

console.log(somatorio(numberTest));