const btnPassword = document.getElementById('showPass');

const showPassword = () => {
    const passwordField = document.getElementById('pass');

    if (btnPassword.checked) {
        passwordField.type = 'text';
    } else {
        passwordField.type = 'password';
    }
}

btnPassword.addEventListener('change', showPassword);

// Short password

const new_p = document.createElement('p');
const main = document.querySelector('#form');
const pass = document.getElementById('pass');

new_p.className = 'forNewP';
main.insertBefore(new_p, pass.nextSibling);

pass.addEventListener('keyup', () => {
    if (pass.value.length < 8)
        new_p.textContent = 'Enter at least 8 characters';
    else
        new_p.textContent = '';
})
