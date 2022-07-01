function createDaysOfTheWeek() {
	const weekDays = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado']
	const weekDaysList = document.querySelector('.week-days');
  
	for (let index = 0; index < weekDays.length; index += 1) {
	  const days = weekDays[index];
	  const dayListItem = document.createElement('li');
	  dayListItem.innerHTML = days;
  
	  weekDaysList.appendChild(dayListItem);
	};
  };
  
  createDaysOfTheWeek();
  
  // Escreva seu código abaixo.
  // exercício 1

  let decemberDaysList = [29, 30, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31];

  function addElement(tag, innerText, classN) {
	let newTag = document.createElement(tag);
	newTag.innerText = innerText;
	newTag.className = classN;
	return newTag;
}

let elementParent1 = document.getElementById('days');

let holidays = [24, 25, 31];
let fridays = [4, 11, 18, 25];

for (let i in decemberDaysList) {
	elementParent1.appendChild(addElement('li', decemberDaysList[i], 'days'));
	for (let j of holidays) {
		if (decemberDaysList[i] === j) {
			elementParent1.children[i].classList.add('holiday');
		}

	}
	for (let k of fridays) {
		if (decemberDaysList[i] === k) {
			elementParent1.children[i].classList.add('friday');
		}

	}
}

// exercício 2

let element1 = document.getElementsByClassName('buttons-container')[0];
element1.appendChild(addElement('button', 'Feriados', '')).setAttribute('id', 'btn-holiday');

// exercício 3

function colorHoliday() {
	let HTMLcol1 = document.getElementsByTagName('li');
	for (let l of HTMLcol1) {
		if (l.classList.contains('holiday')) {
			if (l.style.backgroundColor === 'rgb(238, 238, 238)') {
				l.style.backgroundColor = 'orange';
			} else {
				l.style.backgroundColor = 'rgb(238, 238, 238)';
			}
		}	
	}
}


let element2 = document.getElementById('btn-holiday');
element2.addEventListener('click', colorHoliday);

// exercício 4

element1.appendChild(addElement('button', 'Sexta-feira', '')).setAttribute('id', 'btn-friday');

// exercício 5

function changeFriday() {
	let fridays = [4, 11, 18, 25];
	let fridaysCount = 0;
	let HTMLcol2 = document.getElementsByTagName('li');
	for (let m of HTMLcol2) {
		if (m.classList.contains('friday')) {
			if (m.innerText === 'Sexta-feira') {
				m.innerText = fridays[fridaysCount];
				fridaysCount +=1;
			} else {
				m.innerText = 'Sexta-feira';
			}
		}		
	}
}

let element3 = document.getElementById('btn-friday');
element3.addEventListener('click', changeFriday);

// exercício 6




