let bruto = 3000;
let inss;
let inssParcela;
let ir;
let liquido;

if (bruto <= 1556.84) {
	inss = 0.08;
} else if (bruto <= 2594.92) {
	inss = 0.09;
} else if (bruto <= 5189.82) {
	inss = 0.11;
} else {
	inss = 570.88;
}

bruto = bruto - (bruto*inss);

if (bruto <= 1903.98) {
	ir = 0;
	inssParcela = 0;
} else if (bruto <= 2826.65) {
	ir = 0.075;
	inssParcela = 142.8;
} else if (bruto <= 3751.05) {
	ir = 0.15;
	inssParcela = 354.8;
} else if (bruto <= 4664.68) {
	ir = 0.225;
	inssParcela = 636.13;
} else {
	ir = 0.275;
	inssParcela = 869.36;
}

bruto = bruto - ((bruto*ir)-inssParcela)

console.log(bruto);