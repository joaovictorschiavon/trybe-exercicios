const books = require('./books');

// 2. Construa um array de objetos a partir do array de livros. Cada objeto deve conter uma propriedade author, com o 
// nome da pessoa autora do livro, e uma propriedade age com a idade dessa pessoa quando o livro foi lançado. O array 
// deve ser ordenado por idade, ou seja, da pessoa mais jovem para a mais velha considerando suas idades quando o livro 
// foi lançado.

function nameAndAge(arr) {
	const newArr = [];
	arr.map((book) => {
		const newObj = {
			age: 0,
			author: '',
		};
		newObj.author = book.author.name;
		newObj.age = book.releaseYear - book.author.birthYear;
		newArr.push(newObj);
	});
	newArr.sort((a, b) => a.age - b.age);
	return newArr;
}

console.log(nameAndAge(books));