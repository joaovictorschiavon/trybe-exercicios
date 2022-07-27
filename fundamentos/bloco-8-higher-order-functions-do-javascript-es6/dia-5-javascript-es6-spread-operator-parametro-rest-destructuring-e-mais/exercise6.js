// 6.Suponha que você esteja lidando com carros e, da forma como o problema lhe foi entregue, cada 
// carro é modelado como um array. Porém, essa modelagem está baixo nível. Cria uma função toObject 
// que, dada uma lista, retorna um objeto representando o carro:

const palio = ['Palio', 'Fiat', 2019];
const shelbyCobra = ['Shelby Cobra', 'Ford', 1963];
const chiron = ['Chiron', 'Bugatti', 2016];

// const [nam, marca, ano] = palio;
// const [nam1, marca1, ano1] = shelbyCobra;
// const [nam2, marca2, ano2] = chiron;

const toObject = (nam, marca, ano) => 
	newCarObj = {
		name: nam,
		marca: marca,
		ano: ano,
};


console.log(toObject(...palio));
console.log(toObject(...shelbyCobra));
console.log(toObject(...chiron));