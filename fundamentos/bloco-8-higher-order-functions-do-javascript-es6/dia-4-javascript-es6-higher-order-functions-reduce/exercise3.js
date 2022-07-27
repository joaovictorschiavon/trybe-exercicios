const books = require('./books');

// 3.Calcule a média de idade que as pessoas autoras tinham quando seus respectivos livros foram lançados.

function averageAge(arr) {
	return arr.reduce((acc, curr, index, arrayB) => {
		let nAuthors = arrayB.length;
		let authorAge = curr.releaseYear - curr.author.birthYear;
		return acc += Math.round(authorAge/nAuthors);
	}, 0);
}

console.log(averageAge(books));