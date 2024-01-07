const emailInput = document.getElementById('email');
const emailError = document.querySelector('#email + .error');

const countryInput = document.getElementById('country');
const countryError = document.querySelector('#country + .error');

const zipCodeInput = document.getElementById('zipcode');
const zipCodeError = document.querySelector('#zipcode + .error');

const passwordInput = document.getElementById('password');
const passwordError = document.querySelector('#password + .error');

const confirmPasswordInput = document.getElementById('confirmPassword');
const confirmPasswordError = document.querySelector('#confirmPassword + .error');

const setEventListeners = (function() {
    function updateError(input, error, errorMessages) {
        error.textContent = ''
    
        if (input.validity.valueMissing) {
            error.textContent = errorMessages['valueMissing'] ? errorMessages['valueMissing'] : '';
        } else if (input.validity.typeMismatch) {
            error.textContent = errorMessages['typeMismatch'] ? errorMessages['typeMismatch'] : '';
        }
    };
    
    function blurEventListener(input) {
        input.addEventListener('blur', function(event) {
            if (!input.validity.valid) {
                input.className = 'formInput'
            } else {
                input.className = ''
            }
        })
    };
    
    function inputEventListener(input, error, errorMessages) {
        input.addEventListener('input', function(event) {
            updateError(input, error, errorMessages)
        })
    }

    function setEvents(input, error, errorMessages = {}) {
        blurEventListener(input)
        inputEventListener(input, error, errorMessages)
    }

    return {setEvents}
})();


const emailErrors = {
    valueMissing : 'please enter an email address',
    typeMismatch : 'please enter a valid email address'
}
setEventListeners.setEvents(emailInput, emailError, emailErrors)

const countryErrors = {
    valueMissing : 'please enter a country',
    typeMismatch : 'please enter a valid country'
}
setEventListeners.setEvents(countryInput, countryError, countryErrors)

const zipCodeErrors = {
    valueMissing : 'please enter a zip code',
    typeMismatch : 'please enter a valid zip code'
}
setEventListeners.setEvents(zipCodeInput, zipCodeError, zipCodeErrors)

const passwordErrors = {
    valueMissing : 'please enter a password'
}
setEventListeners.setEvents(passwordInput, passwordError, passwordErrors)

const confirmPasswordErrors = {
    valueMissing : 'please confirm your password'
}
setEventListeners.setEvents(confirmPasswordInput, confirmPasswordError, confirmPasswordErrors)