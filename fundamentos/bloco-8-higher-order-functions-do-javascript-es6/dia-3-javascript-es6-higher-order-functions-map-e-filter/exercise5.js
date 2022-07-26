const books = require('./books');

// 5.Crie um array em ordem alfabética apenas com os nomes de todas as pessoas autoras de ficção científica ou fantasia.


function fantasyOrScienceFictionAuthors(arr) {
	const newArr = [];
	arr.filter((book) => {
		if (book.genre === 'Ficção Científica' || book.genre === 'Fantasia') {
			newArr.push(book.author.name);
		}
	});
	newArr.sort();
	return newArr;	
}

console.log(fantasyOrScienceFictionAuthors(books));