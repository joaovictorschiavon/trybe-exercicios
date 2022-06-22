const custo = 100;
const venda = 200;
let lucro;
let custoTotal;

if (custo < 0 || venda < 0) {
	console.log("Valor impossível");
} else {
	custoTotal = custo * 1.2;
	lucro = 1000 * (venda - custoTotal);
	console.log("Valor de lucro é:" + lucro);
}