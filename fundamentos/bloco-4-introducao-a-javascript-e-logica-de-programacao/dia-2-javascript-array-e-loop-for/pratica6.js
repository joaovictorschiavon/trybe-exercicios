let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let odds = 0;

for (let i = 0; i < numbers.length; i += 1) {
	if (numbers[i] % 2 === 1) {
		odds += 1;
	}
}

if (odds > 0) {
	console.log("Há " + odds + " números ímpares no array");
}else{
	console.log("nenhum valor ímpar encontrado");
}