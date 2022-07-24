const lesson1 = {
	materia: 'Matemática',
	numeroEstudantes: 20,
	professor: 'Maria Clara',
	turno: 'manhã',
  };
  
const lesson2 = {
	materia: 'História',
	numeroEstudantes: 20,
	professor: 'Carlos',
};
  
const lesson3 = {
	materia: 'Matemática',
	numeroEstudantes: 10,
	professor: 'Maria Clara',
	turno: 'noite',
};

// 1.Crie uma função para adicionar o turno da noite na lesson2. Essa função deve possuir três 
// parâmetros, sendo eles: o objeto a ser modificado, a chave que deverá ser adicionada e o valor dela. 

function addNight(objeto, turno, noite) {
	objeto[turno] = `${noite}`;
}
addNight(lesson2, 'turno', 'noite');
console.log(lesson2);

// 2.Crie uma função para listar as keys de um objeto. Essa função deve receber um objeto como parâmetro.

function showKeys(obj) {
	return console.log(Object.keys(obj));
}

showKeys(lesson3);

// 3.Crie uma função para mostrar o tamanho de um objeto. Essa função deve receber um objeto como parâmetro. 

function arraySize(obj) {
	return console.log(Object.keys(obj).length);
}

arraySize(lesson1);

// 4.Crie uma função para listar os valores de um objeto. Essa função deve receber um objeto como parâmetro. 

function listValues(obj) {
	return console.log(Object.entries(obj));
}

listValues(lesson2);

// 5.Crie um objeto de nome allLessons, que deve agrupar todas as aulas através do Object.assign. Cada chave 
// desse novo objeto será uma aula, sendo essas chaves: lesson1, lesson2 e lesson3. Ao executar o comando 
// console.log(allLessons), a saída deverá ser a seguinte: 

const allLessons = {};

Object.assign(allLessons, lesson1, lesson2, lesson3);
console.log(allLessons);

// 6. Usando o objeto criado no exercício 5, crie uma função que retorne o número total de estudantes em todas as aulas. 

function totalStudents(obj) {
	let sum = 0;

	const arr = Object.keys(obj);

	for (let i in arr) {
		sum += obj[arr[i]].numeroEstudantes;
	}
	return sum;
}

console.log(totalStudents(allLessons));

// 7. Crie uma função que obtenha o valor da chave de acordo com o seu índice no objeto. Por exemplo: 

function keyValue(obj, x) {
	return Object.values(obj)[x];
}

console.log(keyValue(lesson2, 2));

// 8. Crie uma função que verifique se o par (chave / valor) existe na função. Essa função deve possuir
// três parâmetros, sendo eles: o objeto, o nome da chave e o valor da chave. Exemplo:

function validatePair(obj, key1, value1) {
	const k = Object.keys(obj);
	const v = Object.values(obj);
	let flag = 0;

	for (let i of k) {
		if (key1 === i) {
			flag += 1;
		}
	}
	for (let j of v) {
		if (value1 === j) {
			flag += 1;
		} 
	}
	if (flag === 2) {
		return true;
	}
	return false;
}

console.log(validatePair(lesson3, 'turno', 'noite'));


