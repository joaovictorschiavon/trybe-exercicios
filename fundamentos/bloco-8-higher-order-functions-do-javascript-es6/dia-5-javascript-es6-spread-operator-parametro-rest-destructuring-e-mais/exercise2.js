// 2. Crie uma função sum que dado um número variável de elementos retorna a soma desses elementos.

function sumVariable(...args) {
	let size = args.length;
	let sum = 0;
	for (let i = 0; i < size; i += 0) {
		sum += args[i];
	}
	return sum;
}