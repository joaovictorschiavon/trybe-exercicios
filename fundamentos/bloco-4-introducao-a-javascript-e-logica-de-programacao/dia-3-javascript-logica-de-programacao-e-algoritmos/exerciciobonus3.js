// 3- Agora inverta o lado do triângulo. Por exemplo:

let n = 5;

if (n > 1) {
	for (let i = 0; i < n; i += 1){
		for (let k = 2; k <= n - i; k +=1){
			process.stdout.write(' ');
		}	
		for (let j = n - i; j <= n; j += 1) {
			process.stdout.write('*');
		}
		console.log('');
	}
}