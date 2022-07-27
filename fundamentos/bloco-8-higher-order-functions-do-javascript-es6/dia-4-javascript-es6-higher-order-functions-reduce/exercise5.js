// 5.Dada o array de nomes, retorne a quantidade de vezes em que aparecem a letra a maiúscula ou minúscula.

const names = [
	'Aanemarie', 'Adervandes', 'Akifusa',
	'Abegildo', 'Adicellia', 'Aladonata',
	'Abeladerco', 'Adieidy', 'Alarucha',
];
  
function containsA(arr) {
	return arr.reduce((acc, curr) => {
		let j = curr.length;
		for (let i = 0; i < j; i += 1) {
			if (curr[i] === 'a' || curr[i] === 'A') {
				acc += 1;
			}
		}
		return acc;
	}, 0)
}

console.log(containsA(names));
