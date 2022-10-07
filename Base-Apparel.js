const Email = document.getElementById('Base-app');
const Charset =  /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/; 
const submit = document.querySelector('.submit-btn');
const error = document.querySelector('.error');
const Label = document.getElementById('note');

function verifymail(params) {
    if (Email.value.match(Charset)) {
        error.style.display = 'none';
        Label.style.display = 'none';
        alert('email is valid');
    } else {
        error.style.display = 'block';
        Label.style.display = 'block';
        alert('email not valid');
    }
}
submit.addEventListener('click', verifymail);
