// 4 - Acesse as chaves nome, sobrenome, andar e apartamento do último morador do blocoDois e faça um console.log no seguinte formato: "O morador do 
// bloco 2 de nome Zoey Brooks mora no 1° andar, apartamento 101".

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

function last(params) {
	
}


console.log("O morador do bloco 2 de nome", moradores.blocoDois[0].nome, moradores.blocoDois[0].sobrenome, 
'mora no', moradores.blocoDois[0].andar ,'andar, apartamento', moradores.blocoDois[0].apartamento);