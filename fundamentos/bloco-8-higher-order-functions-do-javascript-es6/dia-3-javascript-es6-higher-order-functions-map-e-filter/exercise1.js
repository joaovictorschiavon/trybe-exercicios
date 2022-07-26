const books = require('./books');

// 1 . Crie um array com strings no formato NOME_DO_LIVRO - GÊNERO_DO_LIVRO - NOME_DA_PESSOA_AUTOR

function formatedBookNames(arr) {
	const arrStrings = [];
	arr.map((book) => {
		let strings = '';
		strings = `${book.name} - ${book.genre} - ${book.author.name},`;
		arrStrings.push(strings);
		console.log(arrStrings);
	});
	return arrStrings;
}

console.log(formatedBookNames(books));