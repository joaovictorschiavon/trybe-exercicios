// 5 - Agora, defina um segundo objeto com a mesma estrutura (as mesmas chaves) do primeiro e os seguintes valores: 
// 'Tio Patinhas', 'Christmas on Bear Mountain, Dell's Four Color Comics #178', 'O último MacPatinhas', 'Sim'. 
// Então, imprima os valores de cada objeto juntos de acordo com cada uma das chaves. Valor esperado no console:

let info = {
	personagem: 'Margarida',
	origem: 'Pato Donald',
	nota: 'Namorada do personagem principal nos quadrinhos do Pato Donald',
};

info.recorrente = 'Sim';

let infotwo = {
	personagem: 'Tio Patinhas',
	origem: 'Christmas on Bear Mountain, Dells\'s Four Color Comics #178',
	nota: 'O último MacPatinhs',
	recorrente: 'Sim'
};

for (let i in info) {
	if (i !== 'recorrente'){
		console.log(info[i], 'e', infotwo[i]);
	} else {
		console.log("Ambos recorrentes");
	}
}

