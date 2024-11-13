document.addEventListener('DOMContentLoaded', () => {

const emailInput = document.getElementById('email-input');
const passwordInput = document.getElementById('pass-input');
const emailLabel = emailInput.nextElementSibling;
const passwordLabel = passwordInput.nextElementSibling;

function handleFocus(input, label) {
    label.classList.add('label-active');
}

function handleBlur(input, label) {
    if (input.value) {
        label.classList.add('label-active');
    } else {
        label.classList.remove('label-active');
    }
}

// Para o input de email
emailInput.addEventListener('focus', () => handleFocus(emailInput, emailLabel));
emailInput.addEventListener('blur', () => handleBlur(emailInput, emailLabel));

// Para o input de senha
passwordInput.addEventListener('focus', () => handleFocus(passwordInput, passwordLabel));
passwordInput.addEventListener('blur', () => handleBlur(passwordInput, passwordLabel));
});