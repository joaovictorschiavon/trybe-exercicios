//4- Depois, faça uma pirâmide com n asteriscos de base:

let n = 5;

if (n % 2 === 1) {
	// for (let m = 0; m < n/2 -1; m += 1) {
	// 	process.stdout.write(' ');
	// }
	// console.log("*");
	for (let i = 0; i < n/2 -1; i += 1){
		for (let k = 0; k <= n/2 - i -1; k +=1){
			process.stdout.write(' ');
		}	
		for (let l = 1; l <= ; l += 2) {
			process.stdout.write('*');
		}
		// for (let j = n - i; j <= n; j += 1) {
		// 	process.stdout.write('*');
		// }
		// for (let j = n - i; j <= n; j += 1) {
		// 	process.stdout.write(' ');
		// }
		console.log('');
	}
} else {
	
}

// if (n > 1) {
// 	for (let i = 0; i < n; i += 1){
// 		for (let k = 2; k <= n - i; k +=1){
// 			process.stdout.write(' ');
// 		}	
// 		for (let l = n - i; l <= n; l += 1) {
// 			process.stdout.write('*');
// 		}
// 		// for (let j = n - i; j <= n; j += 1) {
// 		// 	process.stdout.write(' ');
// 		// }
// 		console.log('');
// 	}
// }