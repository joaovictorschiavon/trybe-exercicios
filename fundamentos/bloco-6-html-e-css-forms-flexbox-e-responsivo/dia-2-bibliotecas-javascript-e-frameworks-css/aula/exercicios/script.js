let btnSend = document.getElementById('btn-submit');
let submitEvent = btnSend.addEventListener('click', submitForm);

let form = document.getElementById('form-content');

function submitForm(event) {
	event.preventDefault();
}

let btnReset = document.getElementById('btn-reset') ;
btnReset.addEventListener('click', resetForm);

