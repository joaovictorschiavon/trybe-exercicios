const books = require('./books');

// 6.Crie um array com o nome de todos os livros com mais de 60 anos de publicação.

function oldBooks(arr) {
	const old = [];
	arr.filter((book) => {
		if (2022 - book.releaseYear > 60) {
			old.push(book.name);
		}});
	return old;
}

console.log(oldBooks(books));