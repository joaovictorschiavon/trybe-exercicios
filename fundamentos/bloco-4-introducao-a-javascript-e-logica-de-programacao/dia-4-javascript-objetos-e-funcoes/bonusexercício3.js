//🚀 3 - A partir do array de frutas basket, retorne um objeto que contenha o nome da fruta como chave e a quantidade de vezes que ela aparece no array 
// como valor. Por exemplo, o array ['Melancia', 'Abacate', 'Melancia', 'Melancia', 'Uva'], deverá retornar { Melancia: 3, Abacate: 1, Uva: 1 } quando 
// passado como argumento para a função.
// Em seguida, imprima esse resultado na tela com uma mensagem no seguinte formato: Sua cesta possui: x Melancias, x Abacates...

const basket = [
	'Melancia', 'Abacate', 'Melancia', 'Melancia', 'Uva', 'Laranja',
	'Jaca', 'Pera', 'Melancia', 'Uva', 'Laranja', 'Melancia',
	'Banana', 'Uva', 'Pera', 'Abacate', 'Laranja', 'Abacate',
	'Banana', 'Melancia', 'Laranja', 'Laranja', 'Jaca', 'Uva',
	'Banana', 'Uva', 'Laranja', 'Pera', 'Melancia', 'Uva',
	'Jaca', 'Banana', 'Pera', 'Abacate', 'Melancia', 'Melancia',
	'Laranja', 'Pera', 'Banana', 'Jaca', 'Laranja', 'Melancia',
	'Abacate', 'Abacate', 'Pera', 'Melancia', 'Banana', 'Banana',
	'Abacate', 'Uva', 'Laranja', 'Banana', 'Abacate', 'Uva',
	'Uva', 'Abacate', 'Abacate', 'Melancia', 'Uva', 'Jaca',
	'Uva', 'Banana', 'Abacate', 'Banana', 'Uva', 'Banana',
	'Laranja', 'Laranja', 'Jaca', 'Jaca', 'Abacate', 'Jaca',
	'Laranja', 'Melancia', 'Pera', 'Jaca', 'Melancia', 'Uva',
	'Abacate', 'Jaca', 'Jaca', 'Abacate', 'Uva', 'Laranja',
	'Pera', 'Melancia', 'Jaca', 'Pera', 'Laranja', 'Jaca',
	'Pera', 'Melancia', 'Jaca', 'Banana', 'Laranja', 'Jaca',
	'Banana', 'Pera', 'Abacate', 'Uva',
];

function fruits (array) {
	let fruitCount = {};
	fruitCount[array[0]] = 1;
	for (let i of basket) {
		let exist = 0;
		for (let j in fruitCount) {
			if (basket[i] === fruitCount[j]) {
				exist += 1;
			}
		}
		if (exist === 0) {
			fruitCount[i] = 1;
		}
	}
	for (let k in fruitCount){
		let times = 0;
		for (let l of basket) {
			if (k === l){
				times += 1;
			}
		}
		fruitCount[k] = times;
	}
	return fruitCount;
}

let listBasket = fruits(basket); 

console.log(listBasket)

process.stdout.write('Sua cesta possui: ');
for (i in listBasket) {
	let a = listBasket[i].toString();
	process.stdout.write(a);
	process.stdout.write(" ");
	process.stdout.write(i);
	process.stdout.write('s, ');
}

console.log();

for (let m in listBasket) {
	console.log(`Sua cesta possui ${listBasket[m]} ${m}s, `);
}