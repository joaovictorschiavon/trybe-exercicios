const oddsAndEvens = [13, 3, 4, 10, 7, 2];
const arrayB = [];
const len = oddsAndEvens.length;

for (let i = 0; i < len; i += 1) {
	let a = Math.min(...oddsAndEvens)
	arrayB.push(a);
	oddsAndEvens.pop(a);
}
console.log(arrayB);


console.log(oddsAndEvens); // será necessário alterar essa linha 😉