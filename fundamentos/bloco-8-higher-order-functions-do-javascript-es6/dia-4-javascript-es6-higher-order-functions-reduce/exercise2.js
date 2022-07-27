const books = require('./books');

// 2.Crie uma string com os nomes de todas as pessoas autoras.

function reduceNames(arr) {
	return arr.reduce((acc, curr) => {
		return acc += `${curr.author.name}, `;
	}, '');
}	

console.log(reduceNames(books));