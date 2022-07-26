const books = require('./books');

// 3.Crie um array com todos os objetos que possuem gênero ficção científica ou fantasia.

function fantasyOrScienceFiction(arr) {
	return arr.filter((book) => (book.genre === 'Ficção Científica' || book.genre === 'Fantasia'));
}

console.log(fantasyOrScienceFiction(books));