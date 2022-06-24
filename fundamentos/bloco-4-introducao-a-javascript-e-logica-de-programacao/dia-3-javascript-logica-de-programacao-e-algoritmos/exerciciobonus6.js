// 6- Faça um programa que diz se um número definido numa variável é primo ou não.

// Um número primo é um número que só é divisível por 1 e por ele mesmo, ou seja, a divisão dele com quaisquer
// outros números dá resto diferente de zero.
// Dica: você vai precisar de fazer um loop que vá de 0 ao número definido; Além disso, vai precisar de fazer 
// uma checagem a cada iteração e armazenar os resultados em algum lugar.


let interval = 47;
// let bigger = 1;
let divisors = 0;

for (let i = 2; i <= interval; i += 1) {
	// for (let j = i; j >= 2; j -= 1) {
	if (interval % i === 0) {
		divisors += 1;
	}
	// }
	

	// if (divisors === 1 && i > bigger) {
	// 	bigger = i;
	// }
	// divisors = 0;
}
if (divisors === 1) {
	console.log("Número é ímpar");
} else {
	console.log('Númer não é ímpar');
}