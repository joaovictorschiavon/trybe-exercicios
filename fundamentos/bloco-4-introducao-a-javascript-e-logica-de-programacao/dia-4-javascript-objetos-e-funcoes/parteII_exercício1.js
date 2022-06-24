// 1 - Crie uma função que receba uma string e retorne true se for um palíndromo, ou false, se não for.

let word = 'abcedcba'

function isPalindrome (testWord) {
	if (testWord.length % 2 === 0) {
		for (let i = 0; i <= (testWord.length / 2); i += 1) {
			if (testWord[i] !== testWord[testWord.length -1 - i]){
				return false;
			}
		}
		return true; 
	} else {
		for (let i = 0; i <= ((testWord.length - 1) / 2); i += 1) {
			if (testWord[i] !== testWord[testWord.length -1 - i]){
				return false;
			} 
		}
		return true;
	}
} 

console.log(isPalindrome (word));