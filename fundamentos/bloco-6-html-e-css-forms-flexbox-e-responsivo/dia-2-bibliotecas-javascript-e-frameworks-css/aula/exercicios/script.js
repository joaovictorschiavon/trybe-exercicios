let btnSend = document.getElementById('btn-submit');
btnSend.preventDefault();
btnSend.addEventListener('click', submitForm);
let form = document.getElementById('form-content');

function submitForm() {
	form.submit();
}

let btnReset = document.getElementById('btn-reset') ;
btnReset.addEventListener('click', resetForm);

function resetForm() {
	form.reset();
}