const books = require('./books');

// 7. Encontre o nome do livro escrito pela pessoa cujo nome registrado começa com três iniciais.

function authorWith3DotsOnName(arr) {
	let olds = [];
	arr.map((book) => {
		let name = book.author.name;
		let j = name.length
		let flag = 0;
		for (let i = 0; i < j; i += 1) {
			if (name[i] === '.') {
				flag += 1;
			}
		}
		if (flag >= 3) {
			olds.push(book.name);
		}
	});	
	return olds;
}

console.log(authorWith3DotsOnName(books));
