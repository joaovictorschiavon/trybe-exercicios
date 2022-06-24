// 1- O fatorial é a multiplicação de um número natural pelos seus antecessores, exceto o zero. Por exemplo:

let a = 10;
let fatorial = 1;

for (let i = 2; i <= a; i +=1) {
	fatorial *= i;
}

console.log(fatorial);