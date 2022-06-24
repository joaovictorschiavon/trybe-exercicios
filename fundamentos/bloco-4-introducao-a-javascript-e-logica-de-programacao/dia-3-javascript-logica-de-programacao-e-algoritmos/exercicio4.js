// 4- Um número primo é um número inteiro maior do que 1 que possui somente dois divisores, ou seja, é divisível por 1 e por ele mesmo. 
// Sabendo disso, escreva um algoritmo que retorne o maior número primo entre 2 e 50.

let interval = 50;
let bigger = 1;
let divisors = 0;

for (let i = 2; i <= interval; i += 1) {
	for (let j = i; j >= 2; j -= 1) {
		if (i % j === 0) {
			divisors += 1;
		}
	}
	if (divisors === 1 && i > bigger) {
		bigger = i;
	}
	divisors = 0;
}

console.log('O número ' + bigger + ' é o maior número primo até ' + interval + '.');