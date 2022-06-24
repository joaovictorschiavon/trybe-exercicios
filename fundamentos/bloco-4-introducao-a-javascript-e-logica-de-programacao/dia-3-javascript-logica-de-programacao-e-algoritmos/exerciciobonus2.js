//  2- Para o segundo exercício, faça o mesmo que antes, mas que imprima um triângulo retângulo com 5 asteriscos de base. Por exemplo:

let n = 5;

if (n > 1) {
	for (let i = 0; i < n; i += 1){
		for (let j = n - i; j <= n; j += 1) {
			process.stdout.write('*');
		}
		console.log('');
	}
}