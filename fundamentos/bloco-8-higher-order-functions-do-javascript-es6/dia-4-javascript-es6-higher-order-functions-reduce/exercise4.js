const books = require('./books');

// 4.Encontre o livro com o maior nome.

function longestNamedBook(arr) {
	return arr.reduce((acc, curr) => {
		if (curr.name > acc) {
			return curr.name;
		}
		return acc;
	});
}

console.log(longestNamedBook(books));