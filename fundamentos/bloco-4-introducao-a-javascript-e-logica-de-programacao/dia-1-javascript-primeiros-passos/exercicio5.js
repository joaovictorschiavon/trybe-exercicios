let a = 90;
let b = 45;
let c = 45;

if (a > 0 && b > 0 && c > 0) {
	console.log("valor inválido");
}else if (a+b+c === 180) {
	console.log("é um trinângulo");
}else{
	console.log("não é um triângulo");
}