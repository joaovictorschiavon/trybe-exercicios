// 5 - Utilize o for para imprimir o nome completo de todos os moradores do bloco 1, acessando suas chaves nome e 
// sobrenome, depois faça o mesmo para os moradores do bloco 2.

let moradores = {
	blocoUm: [
	  {
		nome: 'Luiza',
		sobrenome: 'Guimarães',
		andar: 10,
		apartamento: 1005,
	  },
	  {
		nome: 'William',
		sobrenome: 'Albuquerque',
		andar: 5,
		apartamento: 502,
	  },
	],
	blocoDois: [
	  {
		nome: 'Murilo',
		sobrenome: 'Ferraz',
		andar: 8,
		apartamento: 804,
	  },
	  {
		nome: 'Zoey',
		sobrenome: 'Brooks',
		andar: 1,
		apartamento: 101,
	  },
	],
  };

for (let i in moradores) {
	console.log(i);
	for (let j in moradores[i]) {
		console.log(moradores[i][j].nome, moradores[i][j].sobrenome);
	}
}  