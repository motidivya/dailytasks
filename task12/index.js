window.onload = function () {
    var username = document.getElementById('username');
    var submitButton = document.getElementById('submit');
    var alertElement = document.querySelector('.alert-element');
    var secondAlertElement = document.querySelector('.second-aria');
    submitButton.addEventListener('click', function () {
        if (username.value.length < 8) {
            alertElement.setAttribute('aria-live', 'assertive');
            alertElement.style.display = 'block';
        }
        else {
            console.log('loveyou moti❤');
        }
    });
    alertElement.addEventListener('click', function () {
        alertElement.style.display = 'none';
        alertElement.removeAttribute('aria-live');
    });
    secondAlertElement.addEventListener('click', function () {
        if (alertElement.style.display = 'block') {
            secondAlertElement.style.display = 'block';
        }
    });
};
