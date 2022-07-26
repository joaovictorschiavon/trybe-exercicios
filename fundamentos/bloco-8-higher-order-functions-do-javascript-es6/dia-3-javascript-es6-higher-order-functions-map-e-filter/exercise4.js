const books = require('./books');

// 4. Crie um array ordenado pelos livros com mais de 60 anos de publicação e ordene-o pelo livro mais velho.

function oldBooksOrdered(arr) {
	const old = arr.filter((book) => (2022 - book.releaseYear > 60));
	old.sort((a, b) => a.releaseYear - b.releaseYear);
	return old;
}

console.log(oldBooksOrdered(books));