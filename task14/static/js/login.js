window.onload = function () {
    var radio1 = document.querySelector('.education ul li:nth-child(1) object');
    var radio2 = document.querySelector('.education ul li:nth-child(2) object');
    var district = document.querySelector('.education ul li:nth-child(1)');
    var independent = document.querySelector('.education ul li:nth-child(2)');
    console.log(radio1, radio2, district, independent);
    district.addEventListener('click', function () {
        if (radio1.ariaChecked != 'true') {
            radio1.ariaChecked = 'true';
            radio1.data = 'assets/icons/radio-button-on.svg';
            radio2.ariaChecked = 'false';
            radio2.data = 'assets/icons/radio-button-off.svg';
        }
        else {
        }
    });
    independent.addEventListener('click', function () {
        if (radio2.ariaChecked != 'true') {
            radio2.ariaChecked = 'true';
            radio2.data = 'assets/icons/radio-button-on.svg';
            radio1.ariaChecked = 'false';
            radio1.data = 'assets/icons/radio-button-off.svg';
        }
        else {
        }
    });
    var inputPasswordField = document.querySelector('.password-field input');
    var preview = document.querySelector('.password-field object');
    preview.addEventListener('mouseover', function () {
        var type = inputPasswordField.getAttribute("type") === "password" ? "text" : "password";
        inputPasswordField.setAttribute("type", type);
        preview.ariaSelected = preview.ariaSelected === 'true' ? 'false' : 'true';
        preview.style.opacity = preview.style.opacity === '0.5' ? '1' : '0.5';
    });
    var rememberme = document.querySelector('.remember-me object');
    rememberme.addEventListener('mouseover', function () {
        rememberme.ariaChecked = rememberme.ariaChecked === 'true' ? 'false' : 'true';
        rememberme.style.opacity = rememberme.style.opacity === '0.2' ? '1' : '0.2';
    });
};
